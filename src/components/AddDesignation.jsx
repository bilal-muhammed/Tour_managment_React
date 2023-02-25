import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



const API_URL = 'http://127.0.0.1:8000/admin-side/';

class AddDesignation extends React.Component {
    state = {
        data: [],
        designation: '',
        designation_id: '',
        };

    componentDidMount() {
        axios.get(`${API_URL}designations`)
            .then(res => {
                this.setState({ data: res.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${API_URL}designations/`, { designation: this.state.designation, designation_id: this.state.designation_id })
            .then(res => {
                console.log(res.data);

                // Add the new item to the component state
                this.setState(prevState => ({
                    data: [...prevState.data, res.data]
                }));
            })
            .catch(error => {
                console.log(error);
            });
    }
    handleDelete = id => {
        axios.delete(`http://127.0.0.1:8000/admin-side/designations/${id}`)
            .then(response => {
                this.componentDidMount();
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleNameChange = (event) => {
        this.setState({ designation: event.target.value });
    }
    handleDesacriptionChange = (event) => {
        this.setState({ designation_id: event.target.value });
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
                                <button type="button" className="btn btn-danger">Add Designation</button>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <form onSubmit={this.handleSubmit}>
                            <div className="card-body row d-flex justify-content-center">

                                <h4 className="card-title">Add Desigantion</h4>
                                <div className="col-5 form-group">
                                    <label>Add Desigantion</label>
                                    <br />
                                    <input type="text" value={this.state.designation} onChange={this.handleNameChange} className="form-control form-control-sm" placeholder="Enter Valid Designation" aria-label="Username" />
                                </div>

                                <div className="col-5 form-group">
                                    <label>Custom Designation Id</label>
                                    <br />
                                    <input maxLength="7" type="text" value={this.state.designation_id} onChange={this.handleDesacriptionChange} className="form-control form-control-sm" placeholder="Enter Custom ID" aria-label="Username" />
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
                                            <th>Designation </th>
                                            <th>Custom Id</th>
                                            <th>Delete</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.data.map((item) => (
                                            <tr key={item.id}>

                                                <td>{item.id}s</td>
                                                <td>{item.designation}s</td>
                                                <td>{item.designation_id}s</td>

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
export default AddDesignation;