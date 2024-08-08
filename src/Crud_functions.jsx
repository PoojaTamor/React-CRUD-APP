// import React, { useEffect, useState } from 'react';
// import toast from 'react-hot-toast';
// import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css';
// import axios from 'axios';

// const Crud_functions = () => {
//   const [users, setUsers] = useState([]);
//   const getdata = async () => {
//     const result = await axios.get('http://localhost:4000/Userdata');
//     setUsers(result.data);
//     console.log(result.data);
    
//   };



//   const [Addusers, setAddusers] = useState({
//     name: '',
//     email: '',
//     address: '',
//     phone: '',
//   });



//   const [editUser, setEditUser] = useState({
//     id: '',
//     name: '',
//     email: '',
//     address: '',
//     phone: '',
//   });


//   const [deleteUser, setDeleteUser] = useState(null);

//   const getUsersDataFromField = (e) => {
//     const { name, value } = e.target;
//     if (e.target.closest('#addEmployeeModal')) {
//       setAddusers({ ...Addusers, [name]: value });
//     } else if (e.target.closest('#editEmployeeModal')) {
//       setEditUser({ ...editUser, [name]: value });
//     }
//     console.log(Addusers);
//   };


//   const submitAddUsers = async (e) => {
//     e.preventDefault();
//     await axios.post('http://localhost:4000/Userdata', Addusers);
//     toast.success(`${Addusers.name} is Added Successfully`);
//     window.$('#addEmployeeModal').modal('hide');
//     getdata();
//   };


//   const handleEditClick = (user) => {
//     setEditUser(user);
//   };


//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     await axios.put(`http://localhost:4000/Userdata/${editUser.id}`, editUser);
//     toast.success(`${editUser.name} is Edited Successfully`);
//     window.$('#editEmployeeModal').modal('hide'); 
//     getdata();
//   };


  
//   const handleDeleteClick = (user) => {
//     setDeleteUser(user);
//   };


//   const handleDeleteSubmit = async (e) => {
//     e.preventDefault();
//     await axios.delete(`http://localhost:4000/Userdata/${deleteUser.id}`);
//     toast.success(`${deleteUser.name} is Deleted Successfully`);
//     setDeleteUser(null);
//     window.$('#deleteEmployeeModal').modal('hide'); 
//     getdata();
//   };


//   const handleALLDeleteSubmit = async (e) => {
//     e.preventDefault();
//     await axios.delete('http://localhost:4000/Userdata/deleteAll');
//     toast.success('All Users are Deleted Successfully');
//     getdata();
//   };

//   useEffect(() => {
//     getdata();
//   }, []);

//   return (
//     <>
//       <div className="container-xl">
//         <div className="table-responsive">
//           <div className="table-wrapper">
//             <div className="table-title">
//               <div className="row">
//                 <div className="col-sm-6">
//                   <h2>
//                     Manage <b>Employees</b>
//                   </h2>
//                 </div>
//                 <div className="col-sm-6">
//                   <a
//                     href="#addEmployeeModal"
//                     className="btn btn-success"
//                     data-toggle="modal"
//                   >
//                     <i className="material-icons"></i>
//                     <span>Add New Employee</span>
//                   </a>
//                   <a
//                     href="#deleteEmployeeModalAll"
//                     className="btn btn-danger"
//                     data-toggle="modal"
//                   >
//                     <i className="material-icons"></i> <span>Delete</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <table className="table table-striped table-hover">
//               <thead>
//                 <tr>
//                   <th>
//                     <span className="custom-checkbox">
//                       <input type="checkbox" id="selectAll" />
//                       <label htmlFor="selectAll" />
//                     </span>
//                   </th>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Address</th>
//                   <th>Phone</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               {users?.map((data, i) => {
//                 const { id, name, email, address, phone } = data;
//                 return (
//                   <tbody key={i}>
//                     <tr>
//                       <td>
//                         <span className="custom-checkbox">
//                           <input
//                             type="checkbox"
//                             id="checkbox1"
//                             name="options[]"
//                             defaultValue={1}
//                           />
//                           <label htmlFor="checkbox1" />
//                         </span>
//                       </td>
//                       <td>{name}</td>
//                       <td>{email}</td>
//                       <td>{address}</td>
//                       <td>{phone}</td>
//                       <td>
//                         <Tippy content="Edit" placement="right">
//                           <a
//                             href="#editEmployeeModal"
//                             className="edit"
//                             data-toggle="modal"
//                             onClick={() => handleEditClick(data)}
//                           >
//                             <i className="material-icons"></i>
//                           </a>
//                         </Tippy>
//                         <Tippy content="Delete" placement="right">
//                           <a
//                             href="#deleteEmployeeModal"
//                             className="delete"
//                             data-toggle="modal"
//                             onClick={() => handleDeleteClick(data)}
//                           >
//                             <i className="material-icons"></i>
//                           </a>
//                         </Tippy>
//                       </td>
//                     </tr>
//                   </tbody>
//                 );
//               })}
//             </table>
//             <div className="clearfix">
//               <div className="hint-text">
//                 Showing <b>5</b> out of <b>{users.length}</b> entries
//               </div>
//               <ul className="pagination">
//                 <li className="page-item disabled">
//                   <a href="#"> Previous </a>
//                 </li>
//                 <li className="page-item">
//                   <a href="#" className="page-link">
//                     1
//                   </a>
//                 </li>
//                 <li className="page-item">
//                   <a href="#" className="page-link">
//                     2
//                   </a>
//                 </li>
//                 <li className="page-item active">
//                   <a href="#" className="page-link">
//                     3
//                   </a>
//                 </li>
//                 <li className="page-item">
//                   <a href="#" className="page-link">
//                     4
//                   </a>
//                 </li>
//                 <li className="page-item">
//                   <a href="#" className="page-link">
//                     5
//                   </a>
//                 </li>
//                 <li className="page-item">
//                   <a href="#" className="page-link">
//                     Next
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Add Modal HTML */}
//       <div id="addEmployeeModal" className="modal fade">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <form onSubmit={submitAddUsers}>
//               <div className="modal-header">
//                 <h4 className="modal-title"> Add Employee </h4>
//                 <button
//                   type="button"
//                   className="close"
//                   data-dismiss="modal"
//                   aria-hidden="true"
//                 >
//                   ×
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <div className="form-group">
//                   <label> Name </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     required=""
//                     name="name"
//                     onChange={getUsersDataFromField}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label> Email </label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     required=""
//                     name="email"
//                     onChange={getUsersDataFromField}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Address</label>
//                   <textarea
//                     className="form-control"
//                     required=""
//                     name="address"
//                     onChange={getUsersDataFromField}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Phone</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     required=""
//                     name="phone"
//                     onChange={getUsersDataFromField}
//                   />
//                 </div>
//               </div>
//               <div className="modal-footer">
//                 <input
//                   type="button"
//                   className="btn btn-default"
//                   data-dismiss="modal"
//                   defaultValue="Cancel"
//                 />
//                 <input type="submit" className="btn btn-success" />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       {/* Edit Modal HTML */}
//       <div id="editEmployeeModal" className="modal fade">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <form onSubmit={handleEditSubmit}>
//               <div className="modal-header">
//                 <h4 className="modal-title"> Edit Employee </h4>
//                 <button
//                   type="button"
//                   className="close"
//                   data-dismiss="modal"
//                   aria-hidden="true"
//                 >
//                   ×
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <div className="form-group">
//                   <label> Name </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     required=""
//                     name="name"
//                     value={editUser.name}
//                     onChange={getUsersDataFromField}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label> Email </label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     required=""
//                     name="email"
//                     value={editUser.email}
//                     onChange={getUsersDataFromField}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label> Address </label>
//                   <textarea
//                     className="form-control"
//                     required=""
//                     name="address"
//                     value={editUser.address}
//                     onChange={getUsersDataFromField}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Phone</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     required=""
//                     name="phone"
//                     value={editUser.phone}
//                     onChange={getUsersDataFromField}
//                   />
//                 </div>
//               </div>
//               <div className="modal-footer">
//                 <input
//                   type="button"
//                   className="btn btn-default"
//                   data-dismiss="modal"
//                   defaultValue="Cancel"
//                 />
//                 <input type="submit" className="btn btn-info" defaultValue="Save" />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       {/* Delete Modal HTML */}
//       <div id="deleteEmployeeModal" className="modal fade">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <form onSubmit={handleDeleteSubmit}>
//               <div className="modal-header">
//                 <h4 className="modal-title">Delete Employee</h4>
//                 <button
//                   type="button"
//                   className="close"
//                   data-dismiss="modal"
//                   aria-hidden="true"
//                 >
//                   ×
//                 </button>
//               </div>
//               <div className="modal-body">
//                 {deleteUser && (
//                   <>
//                     <p>Are you sure you want to delete this record?</p>
//                     <p className="text-warning">
//                       <small>This action cannot be undone.</small>
//                     </p>
//                     <p>
//                       <b>Id:</b> {deleteUser.id}
//                     </p>
//                     <p>
//                       <b>Name:</b> {deleteUser.name}
//                     </p>
//                     <p>
//                       <b>Email:</b> {deleteUser.email}
//                     </p>
//                     <p>
//                       <b>Address:</b> {deleteUser.address}
//                     </p>
//                     <p>
//                       <b>Phone:</b> {deleteUser.phone}
//                     </p>
//                   </>
//                 )}
//               </div>
//               <div className="modal-footer">
//                 <input
//                   type="button"
//                   className="btn btn-default"
//                   data-dismiss="modal"
//                   defaultValue="Cancel"
//                 />
//                 <input type="submit" className="btn btn-danger" defaultValue="Delete" />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//        {/* All Delete users */}
//       <div id="deleteEmployeeModalAll" className="modal fade">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <form onSubmit={handleALLDeleteSubmit}>
//               <div className="modal-header">
//                 <h4 className="modal-title">Delete All Employees</h4>
//                 <button
//                   type="button"
//                   className="close"
//                   data-dismiss="modal"
//                   aria-hidden="true"
//                 >
//                   ×
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <p>Are you sure you want to delete all the records?</p>
//                 <p className="text-warning">
//                   <small>This action cannot be undone.</small>
//                 </p>
//               </div>
//               <div className="modal-footer">
//                 <input
//                   type="button"
//                   className="btn btn-default"
//                   data-dismiss="modal"
//                   defaultValue="Cancel"
//                 />
//                 <input type="submit" className="btn btn-danger" defaultValue="Delete" />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Crud_functions;


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

  const handleALLDeleteSubmit = () => {
    axios.delete('http://localhost:4000/Userdata/deleteAll')
      .then(() => {
        toast.success('All users are deleted successfully');
        getdata();
      });
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
                <div className="col-sm-6">
                  <h2>
                    Manage <b>Employees</b>
                  </h2>
                </div>
                <div className="col-sm-6">
                  <a
                    href="#addEmployeeModal"
                    className="btn btn-success"
                    data-toggle="modal"
                  >
                    <i className="material-icons"></i>
                    <span>Add New Employee</span>
                  </a>
                  <a
                    href="#deleteEmployeeModalAll"
                    className="btn btn-danger"
                    data-toggle="modal"
                  >
                    <i className="material-icons"></i> <span>Delete</span>
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
                    type="text"
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
                    type="text"
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
      {/* All Delete users */}
      <div id="deleteEmployeeModalAll" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleALLDeleteSubmit}>
              <div className="modal-header">
                <h4 className="modal-title">Delete All Employees</h4>
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
                <p>Are you sure you want to delete all the records?</p>
                <p className="text-warning">
                  <small>This action cannot be undone.</small>
                </p>
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
