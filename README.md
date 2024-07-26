# **CRUD Application Using React js**

## **Project Overview**

This project is a CRUD (Create, Read, Update, Delete) application designed to manage employee data. It utilizes React for the frontend interface and JSON Server for backend data management. The app allows users to perform CRUD operations such as adding, editing, viewing, and deleting employee records. Key features include form validation, tooltips, notifications, and pagination.

## **Key Features**

- **CRUD Operations**: Full functionality for managing employee records.
- **Form Validation**: Ensures data integrity using Formik and Yup.
- **Notifications**: Real-time feedback through react-hot-toast.
- **Tooltips**: Enhanced UI with Tippy.js.
- **Mock Backend**: JSON Server simulates a REST API for data handling.

## **Technologies Used**

- **React**: Core framework for building the user interface.
- **Formik**: Form management library.
- **Yup**: Schema validation library.
- **react-hot-toast**: For displaying notifications.
- **Tippy.js**: For tooltips.
- **JSON Server**: Mock backend server.

## **Installation and Setup**

### **Prerequisites**

- Node.js and npm installed.

### **Steps**

**Clone the Repository**:  

git clone &lt;repository-url&gt;

cd &lt;project-directory&gt;

**Start JSON Server**:  
json-server --watch db.json --port 4000

**Start React App**:  
npm start

## **State and Functions**

### **State Variables**

1. **users**: Array storing employee data.
    - **Purpose**: Holds the list of all employees fetched from the server.
    - **Initial Value**: \[\]
2. **editUser**: Object or null.
    - **Purpose**: Stores the employee currently being edited.
    - **Initial Value**: null
3. **visibleCount**: Number indicating how many employees to display.
    - **Purpose**: Controls the number of visible employee entries.
    - **Initial Value**: 5
4. **deleteUser**: Object or null.
    - **Purpose**: Stores the employee selected for deletion.
    - **Initial Value**: null

### **Functions**

1. **getdata**:
    - **Description**: Fetches employee data from the server.
    - **Details**: Uses axios to send a GET request to <http://localhost:4000/Userdata> and updates the users state with the response.
2. **useEffect Hook**:
    - **Description**: Triggers getdata on component mount.
    - **Details**: Ensures that the employee data is fetched and displayed when the component is first rendered.
3. **Formik Form Handling**:
    - **Description**: Manages form state and validation.
    - **Details**:
        - **initialValues**: Initial form field values.
        - **validationSchema**: Validation rules using Yup.
        - **onSubmit**: Handles form submission for adding/editing employees.
4. **handleEditClick**:
    - **Description**: Prepares the form for editing an employee.
    - **Details**: Sets editUser and populates the form with the employee's data.
5. **handleDeleteClick**:
    - **Description**: Prepares for deleting an employee.
    - **Details**: Sets deleteUser and triggers the delete modal.
6. **handleDeleteSubmit**:
    - **Description**: Deletes an employee record.
    - **Details**: Sends a DELETE request to remove the selected employee and updates the list.
7. **handleALLDeleteSubmit**:
    - **Description**: Deletes all employee records.
    - **Details**: Sends a DELETE request to the server endpoint for deleting all users.
8. **loadMoreUsers**:
    - **Description**: Loads more employee entries.
    - **Details**: Increments visibleCount by 5, showing more employees in the list.

### **External Libraries**

1. **axios**
    - **Purpose**: HTTP requests.
    - **Installation**: npm install axios
2. **react-hot-toast**
    - **Purpose**: Notifications.
    - **Installation**: npm install react-hot-toast
3. **Tippy.js**
    - **Purpose**: Tooltips.
    - **Installation**: npm install @tippyjs/react
4. **Formik**
    - **Purpose**: Form handling.
    - **Installation**: npm install formik
5. **Yup**
    - **Purpose**: Form validation.
    - **Installation**: npm install yup

## **Conclusion**

This project effectively demonstrates the use of React in building a CRUD application with a mock backend provided by JSON Server. The application leverages modern libraries for form management, validation, notifications, and UI enhancements. This setup not only helps in quick prototyping but also provides a solid foundation for further development and integration with real-world backends.
