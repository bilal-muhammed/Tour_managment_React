import React, { useState, useEffect, useContext } from "react";



const ResponseTable = () => {

    return (
        <>
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Bordered table</h4>

                        <div className="table-responsive pt-3">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>
                                            SL.NO
                                        </th>
                                        <th>
                                            Date/Time
                                        </th>
                                        <th>
                                            Customer Name
                                        </th>
                                        <th>
                                            Staff Name
                                        </th>
                                        <th>
                                            Branch
                                        </th>
                                        <th>
                                            Tour
                                        </th>
                                        <th>
                                            Response
                                        </th>
                                        <th>
                                            Progress
                                        </th>
                                        <th>
                                            Follow UpDate
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            10/11/2021
                                        </td>
                                        <td>
                                            Devi
                                        </td>
                                    
                                        <td>
                                            Bilal s
                                        </td>
                                        <td>
                                            $ 77.99
                                        </td>
                                        <td>
                                            May 15, 2015
                                        </td>
                                        <td >
                                            <div style={{fontSize:"2px"}} className="zoomit">

                                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nunc vulputate libero et velit interdum, <br /> ac aliquet odio mattis. 
                                            </div>
                                        </td>
                                        <td>
                                            jhsfcxtyhg
                                        </td>
                                        <td>
                                            htdfgs
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            10/11/2021
                                        </td>
                                        <td>
                                            Devi
                                        </td>
                                    
                                        <td>
                                            Bilal s
                                        </td>
                                        <td>
                                            $ 77.99
                                        </td>
                                        <td>
                                            May 15, 2015
                                        </td>
                                        <td >
                                            <div style={{fontSize:"2px"}} className="zoomit">

                                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nunc vulputate libero et velit interdum, <br /> ac aliquet odio mattis. 
                                            </div>
                                        </td>
                                        <td>
                                            jhsfcxtyhg
                                        </td>
                                        <td>
                                            htdfgs
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
export default ResponseTable;
