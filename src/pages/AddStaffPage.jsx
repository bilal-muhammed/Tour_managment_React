import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AddStaffForm from "../components/AddStaffForm";


const AddStaffPage = () => {


    return (


        <>

            <Header />

            <div className="container-fluid page-body-wrapper">

                <Sidebar />

                <div className="main-panel">
                    <div className="content-wrapper">

                        <AddStaffForm />
                    </div>
                </div>
            </div>
        </>

    )
};
export default AddStaffPage;