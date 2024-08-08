import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CrudFunctions = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5);
  const [deleteUser, setDeleteUser] = useState(null);

  const getdata = () => {
    axios.get('http://localhost:4000/Userdata')
      .then((result) => {
        setUsers(result.data);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      address: '',
      phone: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
      .matches(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces")
      .min(3, "Name must be at least 3 characters")
      .max(15, "Name must be at most 15 characters")
      .required("Please enter your name"),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      address: Yup.string().min(3, " must be at least 3 characters")
      .max(15, " must be at most 15 characters").required('Address is required'),
      phone: Yup.string().matches(/^\d+$/, 'Phone number must be digits only').required('Phone is required'),
    }),
    onSubmit: (values) => {
      if (editUser) {
        axios.put(`http://localhost:4000/Userdata/${editUser.id}`, values)
          .then(() => {
            toast.success(`${values.name} is edited successfully`);
            setEditUser(null);
      window.$('#editEmployeeModal').modal('hide');
            getdata();
          });
      } else {
        axios.post('http://localhost:4000/Userdata', values)
          .then(() => {
            toast.success(`${values.name} is added successfully`);
            getdata();
          });
      }
      formik.resetForm();
      window.$('#addEmployeeModal').modal('hide');
    },
  });

  const handleEditClick = (user) => {
    setEditUser(user);
    formik.setValues(user);
  };

  const handleDeleteClick = (user) => {
        setDeleteUser(user);
      };
    
    
      const handleDeleteSubmit = async (e) => {
        e.preventDefault();
        await axios.delete(`http://localhost:4000/Userdata/${deleteUser.id}`);
        toast.success(`${deleteUser.name} is Deleted Successfully`);
        setDeleteUser(null);
        window.$('#deleteEmployeeModal').modal('hide'); 
        getdata();
      };



  const loadMoreUsers = () => {
    setVisibleCount(prevCount => prevCount + 5);
     // Increase the count by 5
  };

  return (
    <>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-9">
                  <h2>
                    Manage <b>Employees</b>
                  </h2>
                </div>
                <div className="col-3">
                  <a
                    href="#addEmployeeModal"
                    className="btn btn-success"
                    data-toggle="modal"
                  >
                    <i className="material-icons"></i>
                    <span>Add New Employee</span>
                  </a>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
               <th>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="selectAll" />
                      <label htmlFor="selectAll" />
                    </span>
                  </th>
                  {/* <th>Sr.NO</th> */}
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              {users.slice(0, visibleCount).map((data, i) => (
                <tbody key={i}>
                  <tr>
                    <td>
                      <span className="custom-checkbox">
                        <input
                          type="checkbox"
                          id={`checkbox${i}`}
                          name="options[]"
                          defaultValue={1}
                        />
                        <label htmlFor={`checkbox${i}`} />
                      </span>
                    </td>
                    {/* <td>{i+1}</td> */}
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.address}</td>
                    <td>{data.phone}</td>
                    <td>
                      <Tippy content="Edit" placement="right">
                        <a
                          href="#editEmployeeModal"
                          className="edit"
                          data-toggle="modal"
                          onClick={() => handleEditClick(data)}
                        >
                          <i className="material-icons"></i>
                        </a>
                      </Tippy>
                      <Tippy content="Delete" placement="right">
                        <a
                          href="#deleteEmployeeModal"
                          className="delete"
                          data-toggle="modal"
                          onClick={() => handleDeleteClick(data)}
                        >
                          <i className="material-icons"></i>
                        </a>
                      </Tippy>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
            
            <div className="clearfix">
              <div className="hint-text">
                Showing <b>{users.length}</b> entries
              </div>
              <ul className="pagination">
                <li className="page-item" onClick={loadMoreUsers}>
                  <a href="#" className="page-link">
                    Show More
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
            {/* <div className="text-center">
              {visibleCount < users.length && (
                <button className="btn btn-primary" onClick={loadMoreUsers}>Load More</button>
              )}
 
      
      {/* Add Modal HTML */}
      <div id="addEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={formik.handleSubmit}>
              <div className="modal-header">
                <h4 className="modal-title">Add Employee</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-danger">{formik.errors.name}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-danger">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <textarea
                    className="form-control"
                    name="address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                  />
                  {formik.touched.address && formik.errors.address ? (
                    <div className="text-danger">{formik.errors.address}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    name="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="text-danger">{formik.errors.phone}</div>
                  ) : null}
                </div>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  defaultValue="Cancel"
                />
                <input type="submit" className="btn btn-success" />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Edit Modal HTML */}
      <div id="editEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={formik.handleSubmit}>
              <div className="modal-header">
                <h4 className="modal-title">Edit Employee</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-danger">{formik.errors.name}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-danger">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <textarea
                    className="form-control"
                    name="address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                  />
                  {formik.touched.address && formik.errors.address ? (
                    <div className="text-danger">{formik.errors.address}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    name="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="text-danger">{formik.errors.phone}</div>
                  ) : null}
                </div>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  defaultValue="Cancel"
                />
                <input type="submit" className="btn btn-info" defaultValue="Save" />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Delete Modal HTML */}
      <div id="deleteEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleDeleteSubmit}>
              <div className="modal-header">
                <h4 className="modal-title">Delete Employee</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                {deleteUser && (
                  <>
                    <p>Are you sure you want to delete this record?</p>
                    <p className="text-warning">
                      <small>This action cannot be undone.</small>
                    </p>
                    {/* <p>
                      <b>Id:</b> {deleteUser.id}
                    </p> */}
                    <p>
                      <b>Name:</b> {deleteUser.name}
                    </p>
                    <p>
                      <b>Email:</b> {deleteUser.email}
                    </p>
                    <p>
                      <b>Address:</b> {deleteUser.address}
                    </p>
                    <p>
                      <b>Phone:</b> {deleteUser.phone}
                    </p>
                  </>
                )}
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  defaultValue="Cancel"
                />
                <input type="submit" className="btn btn-danger" defaultValue="Delete" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrudFunctions;
