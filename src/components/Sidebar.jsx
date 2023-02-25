import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";



const Sidebar = () => {
    const [active, setActive] = useState(1);


    const handleChange = (value)=>{
        setActive(value)

    }

    return (

        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav" >
                <li className={`nav-item ${active == 1 && 'active'}`} onClick={()=>handleChange(1)}>
                    <Link to="/home" className="nav-link">
                        <i className="ti-shield menu-icon"></i>
                        <span className="menu-title ">Dashboard</span>
                    </Link>
                </li>
                <li className={`nav-item ${active == 2 && 'active'}`} onClick={()=>handleChange(2)}>
                    <a className="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded={`${active == 2 ? 'true' : 'false'}`} aria-controls="auth">
                        <i className="ti-rss menu-icon"></i>
                        <span className="menu-title">Admin Requirments</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className={`collapse ${active == 2 && 'show'}`} id="auth">
                        <ul className="nav flex-column sub-menu">

                            <li className="nav-item"> <Link to="/add_brand" className="nav-link active">Brand and Branch</Link></li>

                        </ul>
                    </div>
                </li>
                <br />
                <hr />
                <li className={`nav-item ${active == 3 && 'active'}`} onClick={()=>handleChange(3)}>
                    <Link to="/create_itenary" className="nav-link">
                        <i className="ti-package menu-icon"></i>
                        <span className="menu-title">Create Itinearary</span>
                    </Link>
                </li>
                <li className={`nav-item ${active == 4 && 'active'}`} onClick={()=>handleChange(4)}>
                    <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded={`${active == 4 ? 'true' : 'false'}`} aria-controls="ui-basic">

                        <i className="ti-user menu-icon"></i>
                        <span className="menu-title">Customers</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className={`collapse ${active == 4 && 'show'}`} id="ui-basic">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <Link to="/add_custommer" className="nav-link">Add Customers</Link></li>
                            <li className="nav-item"> <Link to="/all_customers" className="nav-link">All Customers</Link></li>
                        </ul>
                    </div>
                </li>
                <li className={`nav-item ${active == 5 && 'active'}`} onClick={()=>handleChange(5)}>
                    <Link to="/add_components" className="nav-link">
                        <i className="ti-package menu-icon"></i>
                        <span className="menu-title">Tour Components</span>
                    </Link>
                </li>
                <li className={`nav-item ${active == 6 && 'active'}`} onClick={()=>handleChange(6)}>
                    <a className="nav-link" data-bs-toggle="collapse" aria-expanded={`${active == 6 ? 'true' : 'false'}`} aria-controls="ui-leads" href="#ui-leads">
                        <i className="ti-bar-chart-alt menu-icon"></i>
                        <span className="menu-title">Leads</span>
                        <i className="menu-arrow"></i>
                    </a>

                    <div className={`collapse ${active == 6 && 'show'}`} id="ui-leads">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <Link to="/new_leads" className="nav-link">New Leads</Link></li>
                            <li className="nav-item"> <Link to="/pending_leads" className="nav-link">Pentings</Link></li>
                        </ul>
                    </div>

                </li>


                <li className={`nav-item ${active == 7 && 'active'}`} onClick={()=>handleChange(7)}>
                    <a className="nav-link" data-bs-toggle="collapse" aria-expanded={`${active == 7 ? 'true' : 'false'}`} aria-controls="ui-staff" href="#ui-staff">
                        <i className="ti-user menu-icon"></i>
                        <span className="menu-title">Staff</span>

                        <i className="menu-arrow"></i>

                    </a>

                    <div className={`collapse ${active == 7 && 'show'}`} id="ui-staff">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <Link to="/add_staff" className="nav-link">Add Staff</Link></li>
                            <li className="nav-item"> <Link to="/staff_details" className="nav-link">Staffs details</Link></li>
                        </ul>
                    </div>

                </li>



                <li className={`nav-item ${active == 8 && 'active'}`} onClick={()=>handleChange(8)}>
                    <Link to="/create_tours" className="nav-link">
                        <i className="ti-map-alt menu-icon"></i>
                        <span className="menu-title">Create Tour</span>
                    </Link>
                </li>
                <li className={`nav-item ${active == 9 && 'active'}`} onClick={()=>handleChange(9)}>
                    <Link to="/created_tours" className="nav-link">
                        <i className="ti-receipt menu-icon"></i>
                        <span className="menu-title">Created Tours & Addons</span>
                    </Link>
                </li>
                <li className={`nav-item ${active == 10 && 'active'}`} onClick={()=>handleChange(10)}>
                    <Link to="/list_response" className="nav-link">
                        <i className="ti-headphone-alt menu-icon"></i>
                        <span className="menu-title">Response</span>
                    </Link>
                </li>
                <li className={`nav-item ${active == 11 && 'active'}`} onClick={()=>handleChange(11)}>
                    <Link to="/accounts" className="nav-link">
                        <i className="ti-ruler-pencil menu-icon"></i>
                        <span className="menu-title">Accounts</span>
                    </Link>

                </li>
                <li className={`nav-item ${active == 12 && 'active'}`} onClick={()=>handleChange(12)}>
                    <Link to="/billings" className="nav-link">
                        <i className="ti-credit-card menu-icon"></i>
                        <span className="menu-title">Billing</span>
                    </Link>
                </li>
                <li className={`nav-item ${active == 13 && 'active'}`} onClick={()=>handleChange(13)}>
                    <Link to="/list_followup" className="nav-link">


                        <i className="ti-pin-alt menu-icon"></i>
                        <span className="menu-title">Follow Up</span>

                    </Link>
                </li>
                <li className={`nav-item ${active == 14 && 'active'}`} onClick={()=>handleChange(14)}>
                    <Link to="/leave_request" className="nav-link">
                        <i className="ti-comment-alt menu-icon"></i>
                        <span className="menu-title">Leave Request</span>
                    </Link>
                </li>
                <li className={`nav-item ${active == 15 && 'active'}`} onClick={()=>handleChange(15)}>
                    <Link to="/staff_activity" className="nav-link">
                        <i className="ti-hand-drag menu-icon"></i>
                        <span className="menu-title">Staff Activity</span>
                    </Link>
                </li>
            </ul>
        </nav>


    )
};

export default Sidebar;