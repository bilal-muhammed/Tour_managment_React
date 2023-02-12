import React, { useState, useEffect, useContext } from "react";



const AddCustomerForm = () => {

    return (

        <div className="col-12 grid-margin">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title align-left">Add Customer</h4>
                    <form className="form-sample">
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group row">
                                        <div className="col-sm-9">
                                            <label for="phone" className="col-sm-3 col-form-label">Phone</label>
                                            <input id="phone" type="tel" className="form-control" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group row">
                                        <div className="col-sm-9">
                                            <label className="col-sm-3 col-form-label">Branch</label>

                                            <select className="form-control" style={{ height: "3rem" }} id="exampleFormControlSelect2">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group row">
                                        <div className="col-sm-9">
                                            <label className="col-sm-3 col-form-label">Vehicle</label>
                                            <select className="form-control" style={{ height: "3rem" }} id="exampleFormControlSelect2">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-4">
                                    <div className="form-group row">
                                        <div className="col-sm-9">
                                            <label className="col-sm-3 col-form-label">Name</label>
                                            <input type="text" placeholder="Full Name" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group row">
                                        <div className="col-sm-9">
                                            <label className="col-sm-3 col-form-label">Staff</label>
                                            <select className="form-control" style={{ height: "3rem" }} id="exampleFormControlSelect2">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group row">
                                        <div className="col-sm-9">
                                            <label className="col-sm-3 col-form-label">Progress</label>
                                            <select className="form-control" style={{ height: "3rem" }} id="exampleFormControlSelect2">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group row">
                                        <div className="col-sm-9">
                                            <label className="col-sm-3 col-form-label">WhatsApp</label>
                                            <input type="tel" className="form-control" placeholder="WhatsApp Number" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group row">
                                        <div className="col-sm-9">
                                            <label className="col-sm-3 col-form-label">Pax</label>
                                            <input type="number" placeholder="Additional Members" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group row">
                                        <div className="col-sm-9">
                                            <label className="col-sm-3 col-form-label">Source</label>
                                            <select className="form-control" style={{ height: "3rem" }} id="exampleFormControlSelect2">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group row">
                                        <div className="col-sm-9">
                                            <label className="col-sm-3 col-form-label">Address </label>
                                            <input type="text" placeholder="Address" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group row">
                                        <div className="col-sm-9">
                                            <label className="col-sm-3 col-form-label">Category</label>
                                            <input placeholder="Customer Category" type="text" className="form-control" />

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group row">
                                        <div className="col-sm-9">
                                            <label className="col-sm-3 col-form-label">Remarks</label>
                                            <input placeholder="CustomerRemarks" type="text" className="form-control" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group row">
                                        <div className="col-sm-9">
                                            <label className="col-sm-3 col-form-label">City</label>
                                            <input placeholder="Location" type="text" className="form-control" />

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group row">
                                        <div className="col-sm-9">
                                            <label className="col-sm-3 col-form-label">Type</label>
                                            <input placeholder="Customer Type" type="text" className="form-control" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        </div>





    )
};
export default AddCustomerForm;
