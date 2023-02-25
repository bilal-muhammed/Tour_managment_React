import { useEffect, useState } from "react";



const StaffTable = () => {
    const [staffs, setStaff] = useState([]);



    useEffect(() => {
        fetch('http://127.0.0.1:8000/user_managment/list/staffs')
            .then(response => response.json())
            .then(data => {
                setStaff(data);
                console.log(staffs)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);



    return (


        <>
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <div className="input-group ">
                            <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                                <span className="input-group-text" id="search"><i className="ti-search"></i></span>
                            </div>

                            <input type="text" className="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search" />
                        </div>
                        <br />
                        <div className="table-responsive">
                            <h3 className="card-title">Staff Deatails(need update with modal to upate user data and serach function)</h3>
                            <br />

                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>
                                            SL.NO
                                        </th>
                                        <th>
                                            Profile Pic
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
                                            Phone
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {staffs.map(staff => (
                                        <tr key={staff.id}>

                                            <td>{staff.id}</td>
                                            <td className="py-1">
                                                <img src={staff.profile_pic} alt="image" />
                                            </td>
                                            <td>{staff.name}</td>
                                            <td>{staff.designation.designation}</td>
                                            <td>{staff.branch.name}</td>

                                            <td>{staff.phone}</td>




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


export default StaffTable;
