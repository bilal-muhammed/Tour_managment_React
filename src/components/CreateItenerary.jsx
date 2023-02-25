import React from "react";


const CraeteItenerary = () => {


    return (
        <>


            <div className="col-12 grid-margin">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Horizontal Two column</h4>
                        <form className="form-sample">

                            <div className="row">
                                <div className="col-md-6">
                                            <label className="col-sm-3 col-form-label">Custom Booking</label>
                                    <div className="form-group">
                                        <div className="col-sm-9">
                                            <div className="row ">
                                                <div className="col-md-5">
                                                    <address className="text-align-left">
                                                        <p >Customer ID :</p>
                                                        <p>
                                                            Name :
                                                        </p>
                                                        <p>
                                                            Place :
                                                        </p>
                                                        <p>
                                                            Booking Date :
                                                        </p>
                                                        <p>
                                                        Last Update :
                                                        </p>
                                                    </address>
                                                </div>
                                                <div className="col-md-5">
                                                    <address>
                                                        <p >
                                                           .....
                                                        </p>
                                                        <p >
                                                           .......
                                                        </p>
                                                        <p>
                                                          ......
                                                        </p>
                                                        <p>
                                                            ........
                                                        </p>
                                                        <p>
                                                            ..........
                                                        </p>
                                                    </address>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <div className="col-sm-9">
                                        <label className="col-sm-3 col-form-label">Last Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">Gender</label>
                                        <div className="col-sm-9">
                                            <select className="form-control">
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">Date of Birth</label>
                                        <div className="col-sm-9">
                                            <input className="form-control" placeholder="dd/mm/yyyy" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">Category</label>
                                        <div className="col-sm-9">
                                            <select className="form-control">
                                                <option>Category1</option>
                                                <option>Category2</option>
                                                <option>Category3</option>
                                                <option>Category4</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">Membership</label>
                                        <div className="col-sm-4">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios1" value="" checked="" />
                                                    Free
                                                    <i className="input-helper"></i></label>
                                            </div>
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios2" value="option2" />                                                        Professional
                                                    <i className="input-helper"></i></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="card-description">
                                Address
                            </p>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">Address 1</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">State</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">Address 2</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">Postcode</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">City</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">Country</label>
                                        <div className="col-sm-9">
                                            <select className="form-control">
                                                <option>America</option>
                                                <option>Italy</option>
                                                <option>Russia</option>
                                                <option>Britain</option>
                                            </select>
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
export default CraeteItenerary;