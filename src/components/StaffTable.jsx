import React, { useState, useEffect, useContext } from "react";



const StaffTable = () => {

    return (
        <>


            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Staff Deatails</h3>
                        <br />

                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>
                                            SL.NO
                                        </th>
                                        <th>
                                            User
                                        </th>
                                        <th>
                                            Staff Name
                                        </th>
                                        <th>
                                            Designation
                                        </th>
                                        <th>
                                            Branch
                                        </th>
                                        <th>
                                            Update
                                        </th>
                                        <th>
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            12
                                        </td>
                                        <td className="py-1">
                                            <img src="../../images/faces/face1.jpg" alt="image" />
                                            <br />
                                            <br />
                                            <b>id</b> : <b>ADTRP</b>
                                        </td>
                                        <td>
                                            Adeeb Anwar
                                        </td>
                                        <td>
                                            Junior Developer
                                        </td>
                                        <td>

                                            Thrissur
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-info btn-rounded btn-fw">                    
                                            <i className="ti-exchange-vertical"></i>
                                            </button>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-danger btn-rounded btn-fw">
                                                <i className="ti-trash menu-icon"></i>

                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            12
                                        </td>
                                        <td className="py-1">
                                            <img src="../../images/faces/face1.jpg" alt="image" />
                                            <br />
                                            <br />
                                            <b>id</b> : <b>ADTRP</b>
                                        </td>
                                        <td>
                                           Muhammed Bilal
                                        </td>
                                        <td>
                                            FullStack Developer(senior)
                                        </td>
                                        <td>

                                            Thrissur
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-info btn-rounded btn-fw">                    
                                            <i className="ti-exchange-vertical"></i>
                                            </button>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-danger btn-rounded btn-fw">
                                                <i className="ti-trash menu-icon"></i>

                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            12
                                        </td>
                                        <td className="py-1">
                                            <img src="../../images/faces/face1.jpg" alt="image" />
                                            <br />
                                            <br />
                                            <b>id</b> : <b>ADTRP</b>
                                        </td>
                                        <td>
                                            Adeeb Anwar
                                        </td>
                                        <td>
                                            Junior Developer
                                        </td>
                                        <td>

                                            Thrissur
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-info btn-rounded btn-fw">                    
                                            <i className="ti-exchange-vertical"></i>
                                            </button>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-danger btn-rounded btn-fw">
                                                <i className="ti-trash menu-icon"></i>

                                            </button>
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
export default StaffTable;