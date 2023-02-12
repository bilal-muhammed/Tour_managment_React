import React, { useState, useEffect, useContext } from "react";



const AddStaffForm = () => {

    return (
        <>
            <div className="col-12 grid-margin">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Add Staff</h4>
                        <form className="form-sample">
                            <br />
                            <div className="container">

                                <div className="row" >
                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Username</label>
                                                <input type="text" placeholder="Enter Username" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Name</label>
                                                <input type="text" placeholder="Full Name" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4" >
                                        <div class="form-group">
                                            <label className="col-sm-3 col-form-label">Upolad Staff ID</label>
                                            <input type="file" name="img[]" class="file-upload-default" />
                                            <div class="input-group col-xs-12">
                                                <input type="text" class="form-control file-upload-info" disabled placeholder="Upload ID Image" />
                                                <span class="input-group-append">
                                                    <button class="file-upload-browse btn btn-danger" type="button">Upload</button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">

                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Password</label>
                                                <input type="password" className="form-control" placeholder="Enter Password" />
                                            </div>
                                        </div>



                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Address</label>
                                                <input className="form-control" placeholder="Address" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4" >
                                        <div class="form-group">
                                            <label className="col-sm-3 col-form-label">Upolad</label>
                                            <input type="file" name="img[]" class="file-upload-default" />
                                            <div class="input-group col-xs-12">
                                                <input type="text" class="form-control file-upload-info" disabled placeholder="Upload ID Image" />
                                                <span class="input-group-append">
                                                    <button class="file-upload-browse btn btn-danger" type="button">Upload</button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Designaton</label>
                                                <select style={{ height: "3rem" }} className="form-control">
                                                    <option>Category1</option>
                                                    <option>Category2</option>
                                                    <option>Category3</option>
                                                    <option>Category4</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Mobile </label>
                                                <input type="tell" placeholder="Contact Number" className="form-control" />
                                            </div>
                                        </div>

                                    </div>

                                </div>


                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Branch</label>
                                                <select style={{ height: "3rem" }} className="form-control">
                                                    <option>Category1</option>
                                                    <option>Category2</option>
                                                    <option>Category3</option>
                                                    <option>Category4</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Adhar_Number</label>
                                                <input type="text" className="form-control" placeholder="Adhar Number" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>


        </>
    )
};
export default AddStaffForm