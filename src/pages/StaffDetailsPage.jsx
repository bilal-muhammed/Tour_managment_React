import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import StaffTable from "../components/StaffTable";


const StaffDetailsPage = () => {


    return (
        <>
            <Header />

            <div className="container-fluid page-body-wrapper">

                <Sidebar />

                <div className="main-panel">
                    <div className="content-wrapper">

                        <StaffTable />
                    </div>
                </div>
            </div>

        </>
    )
};
export default StaffDetailsPage;