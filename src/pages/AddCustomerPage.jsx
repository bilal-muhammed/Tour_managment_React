import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AddCustomerForm from "../components/AddCustomerForm";


const AddCustomerPage = () => {


    return (


        <>

            <Header />

            <div className="container-fluid page-body-wrapper">

                <Sidebar />

                <div className="main-panel">
                    <div className="content-wrapper">

                        <AddCustomerForm />
                    </div>
                </div>
            </div>
        </>

    )
};
export default AddCustomerPage;