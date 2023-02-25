import React, { useState, useEffect, useContext } from "react";



const FollowUpTable = () => {

    return (
        <>

            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Bordered table</h4>
                    Search Bar Needed
                        
                        <div className="table-responsive pt-3">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>
                                            SL.No
                                        </th>
                                        <th>
                                            Customer Name
                                        </th>
                                        <th>
                                            Location
                                        </th>
                                        <th>
                                            Tour
                                        </th>
                                        <th>
                                            Date
                                        </th>
                                        <th>
                                            Branch
                                        </th>
                                        <th>
                                            Staff
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
                                        </td><td>
                                            May 15, 2015
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
export default FollowUpTable;