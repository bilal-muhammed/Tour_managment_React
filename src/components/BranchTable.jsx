import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const BranchTAble = () => {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [address, setAddress] = useState('');
    const [brandId, setbrandId] = useState('');
    const [brand, setbrand] = useState([]);
    const [branchdata, setBranchData] = useState([]);


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/admin-side/brands/')
            .then(response => setbrand(response.data))
        axios.get('http://127.0.0.1:8000/admin-side/list/branches')
            .then(response => setBranchData(response.data))

            .catch(error => console.error(error));
    }, [branchdata]);





    const handleSubmit = event => {
        event.preventDefault();
        const data = {
            // branch: branch,
            brand: brandId,
            country: country,
            name: name,
            state: state,
            district: district,
            address: address,


        };
        axios.post('http://127.0.0.1:8000/admin-side/create/branches', data)
            .then(response => {
                setBranchData([...branchdata, response.data]);
                console.log(response.data);
                setName('');
                setCountry('');
                setState('');
                setDistrict('');
                setAddress('');


            })
            .catch(error => console.error(error));
    }

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
                    <div className="card-body row">
                        <form onSubmit={handleSubmit}>

                            <h4 className="card-title">Branch...(need update as confirmmation modal)....</h4>
                            <div className="row">


                                <div className="col-md-4">
                                    <div className="form-group">
                                        <div className="col-sm-9">
                                            <label className="col-sm-3 col-form-label">Branch </label>
                                            <input type="text" value={name} onChange={event => setName(event.target.value)} className="form-control form-control-sm" placeholder="Branch Name" aria-label="Username" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="form-group ">
                                        <div className="col-sm-9">
                                            <label className="col-sm-3 col-form-label">Country</label>
                                            <input type="text" value={country} onChange={event => setCountry(event.target.value)} className="form-control form-control-sm" placeholder="Country" aria-label="Username" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group ">
                                        <div className="col-sm-9">
                                            <label className="col-sm-3 col-form-label">State</label>
                                            <input type="text" value={state} onChange={event => setState(event.target.value)} className="form-control form-control-sm" placeholder="State" aria-label="Username" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group row">
                                        <div className="col-sm-9">
                                            <label className="col-sm-3 col-form-label">District</label>
                                            <input type="text" value={district} onChange={event => setDistrict(event.target.value)} className="form-control form-control-sm" placeholder="State" aria-label="Username" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group row">
                                        <div className="col-sm-9">
                                            <label className="col-sm-3 col-form-label"> Address</label>
                                            <input type="text" value={address} onChange={event => setAddress(event.target.value)} className="form-control form-control-sm" placeholder="Address of Branch" aria-label="Username" />
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-4">
                                    <div className="form-group row">
                                        <div className="col-sm-9">
                                            <label className="col-sm-3 col-form-label">Brand</label>
                                            <select value={brandId} onChange={event => setbrandId(event.target.value)} className="form-control form-control-sm" id="exampleFormControlSelect3">
                                                {brand.map(brand => (
                                                    <option key={brand.id} value={brand.id}>{brand.name}</option>
                                                ))}

                                            </select>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary me-2">Submit</button>


                        </form>

                    </div>
                </div>
            </div>


            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Hoverable Table</h4>

                        <div>

                        </div>


                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>SL.NO</th>
                                        <th>Branch</th>
                                        <th>Country</th>
                                        <th>State</th>
                                        <th>District</th>
                                        <th>Address</th>
                                        <th>Brand</th>
                                        <th>Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {branchdata.map((item) => (
                                        <tr key={item.id}>

                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.country}</td>
                                            <td>{item.state}</td>
                                            <td>{item.district}</td>
                                            <td style={{ width: "20%" }}><p>{item.address}</p></td>
                                            <td>{item.brand.name}</td>
                                            <td>
                                                <div className="update">
                                                    <span className="tooltiptext">Update</span>

                                                    <button type="button"  onClick={() => this.handleDelete(item.id)} className="btn btn-danger btn-rounded btn-fw"><i className="ti-trash btn-icon-prepend"></i></button>
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

    )
};
export default BranchTAble;