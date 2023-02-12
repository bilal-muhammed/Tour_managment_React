import React, { useState, useEffect, useContext } from "react";



const BranchTAble = () => {

    return (
        <>
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Hoverable Table</h4>

                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>SL.NO</th>
                                        <th>Branch</th>
                                        <th>Head</th>
                                        <th>Brand</th>
                                        <th>State</th>
                                        <th>District</th>
                                        <th>Phone</th>
                                        <th>Status</th>
                                        <th>Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Photoshop</td>
                                        <td className="text-danger"> 28.76% <i className="ti-arrow-down"></i></td>
                                        <td className="text-danger"> 28.76% <i className="ti-arrow-down"></i></td>
                                        <td className="text-danger"> 28.76% <i className="ti-arrow-down"></i></td>
                                        <td className="text-danger"> 28.76% <i className="ti-arrow-down"></i></td>
                                        <td className="text-danger"> 28.76% <i className="ti-arrow-down"></i></td>
                                        <td className="text-danger"> 28.76% <i className="ti-arrow-down"></i></td>
                                        <td>
                                            <div className="update">
                                                <span class="tooltiptext">Update</span>

                                            <button type="button" class="btn btn-info btn-rounded btn-fw">
                                                <i class="ti-upload btn-icon-prepend"></i></button>
                                            </div>
                                        </td>


                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Photoshop</td>
                                        <td className="text-danger"> 28.76% <i className="ti-arrow-down"></i></td>
                                        <td className="text-danger"> 28.76% <i className="ti-arrow-down"></i></td>
                                        <td className="text-danger"> 28.76% <i className="ti-arrow-down"></i></td>
                                        <td className="text-danger"> 28.76% <i className="ti-arrow-down"></i></td>
                                        <td className="text-danger"> 28.76% <i className="ti-arrow-down"></i></td>
                                        <td className="text-danger"> 28.76% <i className="ti-arrow-down"></i></td>
                                        <td>
                                            <div className="update">
                                                <span class="tooltiptext">Update</span>

                                            <button type="button" class="btn btn-info btn-rounded btn-fw">
                                                <i class="ti-upload btn-icon-prepend"></i></button>
                                            </div>
                                        </td>


                                    </tr>

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