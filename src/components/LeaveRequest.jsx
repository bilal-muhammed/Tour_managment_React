import React, { useState, useEffect, useContext } from "react";



const LeaveRequest = () => {

    return (
        <>

            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                    <h4 className="card-title">Leave Requested by Staff</h4>
                        <div className="col-lg-12 d-flex justify-content-between">
                            <button type="button" className="btn btn-secondary col-3">REQUESTS</button>
                            <button type="button" className="btn btn-danger col-3">DENIED</button>
                            <button type="button" className="btn btn-success col-3">APPROVED</button>

                        </div>
                        <br />

                        <div className="table-responsive pt-3">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>
                                            SL.No
                                        </th>
                                        <th>
                                            Staff Name
                                        </th>
                                        <th>
                                            Staff ID
                                        </th>
                                        <th>
                                            Date
                                        </th>
                                        <th>
                                            Date From
                                        </th>
                                        <th>
                                            Dete To
                                        </th>
                                        <th>
                                            Reason
                                        </th>
                                        <th>
                                            Progress
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            Herman Beck
                                        </td>
                                        <td>
                                            <div className="progress">
                                            </div>
                                        </td>
                                        <td>
                                            $ 77.99
                                        </td>
                                        <td>
                                            May 15, 2015
                                        </td>
                                        <td>
                                            May 15, 2015
                                        </td><td>
                                            May 15, 2015
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-evenly">

                                            <button type="button" className="btn btn-success btn-rounded btn-icon">
                                                <i className="ti-check"></i>
                                            </button>
                                            
                                            <button type="button" className="btn btn-danger btn-rounded btn-icon">
                                                <i className="ti-close"></i>
                                            </button>
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
export default LeaveRequest;