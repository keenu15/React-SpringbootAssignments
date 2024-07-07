import React, { useState } from 'react';

function FormComponent() {
  const [data, setData] = useState({
    details: [
      { id: 1, name: 'Rajesh', salary: '50000', department: 'Engineer' },
      { id: 2, name: 'Suresh', salary: '70000', department: 'Manager' }
    ],
    id: '',
    name: '',
    salary: '',
    department: '',
    isUpdating: false,
    updateIndex: null,
    updateId: '',
    updateName: '',
    updateSalary: '',
    updateDepartment: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, name, salary, department } = data;

    const newDetail = {
      id: id,
      name: name,
      salary: salary,
      department: department
    };

    setData((prevState) => ({
      ...prevState,
      details: [...prevState.details, newDetail],
      id: '',
      name: '',
      salary: '',
      department: ''
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const { updateId, updateName, updateSalary, updateDepartment, updateIndex } = data;

    const updatedDetail = {
      id: updateId,
      name: updateName,
      salary: updateSalary,
      department: updateDepartment
    };

    const updatedDetails = data.details.map((detail, index) =>
      index === updateIndex ? updatedDetail : detail
    );

    setData((prevState) => ({
      ...prevState,
      details: updatedDetails,
      isUpdating: false,
      updateIndex: null,
      updateId: '',
      updateName: '',
      updateSalary: '',
      updateDepartment: ''
    }));
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDelete = (index) => {
    setData((prevState) => ({
      ...prevState,
      details: prevState.details.filter((_, i) => i !== index)
    }));
  };

  const handleUpdate = (index) => {
    const detail = data.details[index];
    setData((prevState) => ({
      ...prevState,
      updateId: detail.id,
      updateName: detail.name,
      updateSalary: detail.salary,
      updateDepartment: detail.department,
      isUpdating: true,
      updateIndex: index
    }));
  };

  return (
    <div>
      <center>
        <h2>Add New Employee</h2>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td><label>ID:</label></td>
                <td><input type="text" name="id" value={data.id} onChange={handleChange} /></td>
              </tr>
              <tr>
                <td><label>Name:</label></td>
                <td><input type="text" name="name" value={data.name} onChange={handleChange} /></td>
              </tr>
              <tr>
                <td><label>Salary:</label></td>
                <td><input type="text" name="salary" value={data.salary} onChange={handleChange} /></td>
              </tr>
              <tr>
                <td><label>Department:</label></td>
                <td><input type="text" name="department" value={data.department} onChange={handleChange} /></td>
              </tr>
              <tr>
                <td></td>
                <td><button type="submit">Submit</button></td>
              </tr>
            </tbody>
          </table>
        </form>
        <div>
          <h2>Employee Details</h2>
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Department</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.details.map((detail, index) => (
                <tr key={index}>
                  <td>{detail.id}</td>
                  <td>{detail.name}</td>
                  <td>{detail.salary}</td>
                  <td>{detail.department}</td>
                  <td>
                    <button onClick={() => handleUpdate(index)}>Update</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {data.isUpdating && (
          <div>
            <h2>Update Employee</h2>
            <form onSubmit={handleUpdateSubmit}>
              <table>
                <tbody>
                  <tr>
                    <td><label>ID:</label></td>
                    <td><input type="text" name="updateId" value={data.updateId} onChange={handleUpdateChange} disabled /></td>
                  </tr>
                  <tr>
                    <td><label>Name:</label></td>
                    <td><input type="text" name="updateName" value={data.updateName} onChange={handleUpdateChange} /></td>
                  </tr>
                  <tr>
                    <td><label>Salary:</label></td>
                    <td><input type="text" name="updateSalary" value={data.updateSalary} onChange={handleUpdateChange} /></td>
                  </tr>
                  <tr>
                    <td><label>Department:</label></td>
                    <td><input type="text" name="updateDepartment" value={data.updateDepartment} onChange={handleUpdateChange} /></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td><button type="submit">Update</button></td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        )}
      </center>
    </div>
  );
}

export default FormComponent;
