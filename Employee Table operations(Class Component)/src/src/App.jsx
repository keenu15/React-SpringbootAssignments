import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
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
      }
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, name, salary, department } = this.state.data;

    const newDetail = {
      id: id,
      name: name,
      salary: salary,
      department: department
    };

    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        details: [...prevState.data.details, newDetail],
        id: '',
        name: '',
        salary: '',
        department: ''
      }
    }));
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [name]: value
      }
    }));
  };

  handleUpdateSubmit = (e) => {
    e.preventDefault();
    const { updateId, updateName, updateSalary, updateDepartment, updateIndex } = this.state.data;

    const updatedDetail = {
      id: updateId,
      name: updateName,
      salary: updateSalary,
      department: updateDepartment
    };

    const updatedDetails = this.state.data.details.map((detail, index) =>
      index === updateIndex ? updatedDetail : detail
    );

    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        details: updatedDetails,
        isUpdating: false,
        updateIndex: null,
        updateId: '',
        updateName: '',
        updateSalary: '',
        updateDepartment: ''
      }
    }));
  };

  handleUpdateChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [name]: value
      }
    }));
  };

  handleDelete = (index) => {
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        details: prevState.data.details.filter((_, i) => i !== index)
      }
    }));
  };

  handleUpdate = (index) => {
    const detail = this.state.data.details[index];
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        updateId: detail.id,
        updateName: detail.name,
        updateSalary: detail.salary,
        updateDepartment: detail.department,
        isUpdating: true,
        updateIndex: index
      }
    }));
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <center>
          <h2>Add New Employee</h2>
          <form onSubmit={this.handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td><label>ID:</label></td>
                  <td><input type="text" name="id" value={data.id} onChange={this.handleChange} /></td>
                </tr>
                <tr>
                  <td><label>Name:</label></td>
                  <td><input type="text" name="name" value={data.name} onChange={this.handleChange} /></td>
                </tr>
                <tr>
                  <td><label>Salary:</label></td>
                  <td><input type="text" name="salary" value={data.salary} onChange={this.handleChange} /></td>
                </tr>
                <tr>
                  <td><label>Department:</label></td>
                  <td><input type="text" name="department" value={data.department} onChange={this.handleChange} /></td>
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
                      <button onClick={() => this.handleUpdate(index)}>Update</button>
                      <button onClick={() => this.handleDelete(index)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {data.isUpdating && (
            <div>
              <h2>Update Employee</h2>
              <form onSubmit={this.handleUpdateSubmit}>
                <table>
                  <tbody>
                    <tr>
                      <td><label>ID:</label></td>
                      <td><input type="text" name="updateId" value={data.updateId} onChange={this.handleUpdateChange} disabled /></td>
                    </tr>
                    <tr>
                      <td><label>Name:</label></td>
                      <td><input type="text" name="updateName" value={data.updateName} onChange={this.handleUpdateChange} /></td>
                    </tr>
                    <tr>
                      <td><label>Salary:</label></td>
                      <td><input type="text" name="updateSalary" value={data.updateSalary} onChange={this.handleUpdateChange} /></td>
                    </tr>
                    <tr>
                      <td><label>Department:</label></td>
                      <td><input type="text" name="updateDepartment" value={data.updateDepartment} onChange={this.handleUpdateChange} /></td>
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
}

export default App;
