import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";



const Sidebar = () => {

    const [active, setActive] = useState(1)

    return (

        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className={`nav-item ${active == 1 && 'active'}`} onClick={()=> setActive(1)}>
                    <Link to="/home" className="nav-link">
                        <i className="ti-shield menu-icon"></i>
                        <span className="menu-title">Dashboard</span>
                    </Link>
                </li>
                <br />
                <hr />
                <li className={`nav-item ${active == 2 && 'active'}`} onClick={()=> setActive(2)}>
                    <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">

                        <i class="ti-user menu-icon"></i>
                        <span className="menu-title">Customers</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="ui-basic">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <Link to="/add_custommer" className="nav-link">Add Customers</Link></li>
                            <li className="nav-item"> <Link to="/all_customers" className="nav-link">All Customers</Link></li>
                        </ul>
                    </div>
                </li>
                <li className={`nav-item ${active == 3 && 'active'}`} onClick={()=> setActive(3)}>
                    <a className="nav-link" data-bs-toggle="collapse" aria-expanded="false" aria-controls="ui-leads" href="#ui-leads">
                        <i className="ti-bar-chart-alt menu-icon"></i>
                        <span className="menu-title">Leads</span>
                        <i className="menu-arrow"></i>
                    </a>

                    <div className="collapse" id="ui-leads">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <Link to="/new_leads" className="nav-link">New Leads</Link></li>
                            <li className="nav-item"> <Link to="/pending_leads" className="nav-link">Pentings</Link></li>
                        </ul>
                    </div>

                </li>


                <li className={`nav-item ${active == 4 && 'active'}`} onClick={()=> setActive(4)}>
                    <a className="nav-link" data-bs-toggle="collapse" aria-expanded="false" aria-controls="ui-staff" href="#ui-staff">
                    <i class="ti-user menu-icon"></i>
                        <span className="menu-title">Staff</span>
                        
                        <i className="menu-arrow"></i>

                    </a>

                    <div className="collapse" id="ui-staff">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <Link to="/add_staff" className="nav-link">Add Staff</Link></li>
                            <li className="nav-item"> <Link to="/staff_details" className="nav-link">Staffs details</Link></li>
                        </ul>
                    </div>

                </li>
                 

                <li className={`nav-item ${active == 5 && 'active'}`} onClick={()=> setActive(5)}>
                    <a className="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                        <i className="ti-rss menu-icon"></i>
                        <span className="menu-title">Branch & Brands</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="auth">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <Link to ="/add_branch" className="nav-link"> Add Branch </Link></li>
                            <li className="nav-item"> <Link to ="/list_branch" className="nav-link"> Branch details </Link></li>
                            <li className="nav-item"> <Link to ="/add_brand" className="nav-link"> Add Brand </Link></li>
                            
                        </ul>
                    </div>
                </li>
                <li className={`nav-item ${active == 6 && 'active'}`} onClick={()=> setActive(6)}>
                    <Link to="/add_tours" className="nav-link">
                        <i className="ti-write menu-icon"></i>
                        <span className="menu-title">Create Tour</span>
                    </Link>
                </li>
                <li className={`nav-item ${active == 7 && 'active'}`} onClick={()=> setActive(7)}>
                    <Link to="/list_response" className="nav-link">
                    <i className="ti-headphone-alt menu-icon"></i>
                        <span className="menu-title">Response</span>
                    </Link>
                </li>
                <li className={`nav-item ${active == 8 && 'active'}`} onClick={()=> setActive(8)}>
                    <Link to="/accounts" className="nav-link">
                        <i className="ti-ruler-pencil menu-icon"></i>
                        <span className="menu-title">Accounts</span>
                    </Link>

                </li>
                <li className={`nav-item ${active == 9 && 'active'}`} onClick={()=> setActive(9)}>
                    <Link to="/billings" className="nav-link">
                        <i className="ti-credit-card menu-icon"></i>
                        <span className="menu-title">Billing</span>
                    </Link>
                </li>
                <li className={`nav-item ${active == 10 && 'active'}`} onClick={()=> setActive(0)}>
                    <Link to="/follo_up" className="nav-link">


                    <i className="ti-pin-alt menu-icon"></i>
                        <span className="menu-title">Follow Up</span>
                        
                    </Link>
                </li>
                <li className={`nav-item ${active == 11 && 'active'}`} onClick={()=> setActive(1)}>
                    <Link to="/leave_request" className="nav-link">
                        <i className="ti-comment-alt menu-icon"></i>
                        <span className="menu-title">Leave Request</span>
                    </Link>
                </li>
                <li className={`nav-item ${active == 12 && 'active'}`} onClick={()=> setActive(2)}>
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