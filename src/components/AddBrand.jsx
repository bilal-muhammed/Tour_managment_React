import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



const API_URL = 'http://127.0.0.1:8000/admin-side/';

class AddBrand extends React.Component {
    state = {
        data: [],
        name: '',
        description: '',
    };

    componentDidMount() {
        axios.get(`${API_URL}brands/`)
            .then(res => {
                this.setState({ data: res.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${API_URL}brands/`, { name: this.state.name ,description: this.state.description})
            .then(res => {
                console.log(res.data);
            
                // Add the new item to the component state
                
                this.setState(prevState => ({
                    data: [...prevState.data, res.data],
                    
                }));
            })
            .catch(error => {
                console.log(error);
            });
    }
    handleDelete = id => {
        axios.delete(`http://127.0.0.1:8000/admin-side/brands/${id}`)
          .then(response => {
            this.componentDidMount();
          })
          .catch(error => {
            console.log(error);
          });
      }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    }
    handleDesacriptionChange = (event) => {
        this.setState({ description: event.target.value });
    }

    render() {
        return (
            <>

                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body row">
                            <div className="col-4">

                                <Link to="/add_branch"><button type="button" className="btn btn-danger">Add Branch</button></Link>

                            </div>
                            <div className="col-4">

                                <Link to="/add_brand"><button type="button" className="btn btn-danger">Add Brand</button></Link>
                            </div>
                            <div className="col-4">
                            <Link to="/add_designation"> <button type="button" className="btn btn-danger">Add Designation</button></Link>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <form onSubmit={this.handleSubmit}>
                            <div className="card-body row d-flex justify-content-center">

                                <h4 className="card-title">Add Brand</h4>
                                <div className="col-5 form-group">
                                    <label>Brand Name</label>
                                    <br />
                                    <input type="text" value={this.state.name} onChange={this.handleNameChange} className="form-control form-control-sm" placeholder="Enter Brand Name" aria-label="Username" />
                                </div>

                                <div className="col-5 form-group">
                                    <label>Add Description</label>
                                    <br />
                                    <input type="text" value={this.state.description} onChange={this.handleDesacriptionChange} className="form-control form-control-sm" placeholder="Description" aria-label="Username" />
                                </div>
                                <br />
                                <div className="container">
                                    <br />
                                    <button type="submit" className="btn btn-primary me-2">Submit</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>


                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Brands...(need update as confirmmation modal)....</h4>

                            <div>

                            </div>


                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>SL.NO</th>
                                            <th>Brand</th>
                                            <th>Description</th>
                                            <th>Delete</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.data.map((item) => (
                                            <tr key={item.id}>

                                                <td>{item.id}s</td>
                                                <td>{item.name}s</td>

                                                <td>{item.description}s</td>
                                                <td>
                                                    <div className="update">
                                                        <span className="tooltiptext">Delete</span>

                                                        <button type="button" onClick={() => this.handleDelete(item.id)} className="btn btn-danger btn-rounded btn-fw">
                                                            <i className="ti-trash btn-icon-prepend"></i></button>
                                                    </div>
                                                </td>


                                            </tr>
                                        ))}
                                    </tbody>


                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </>

        );
    }
}
export default AddBrand;