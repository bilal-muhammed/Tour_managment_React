import React, { useState, useEffect, useContext } from "react";
import BranchTAble from "../components/BranchTable";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
 


const BranchPage = () => {


    return (
        <>
            <Header />

            <div className="container-fluid page-body-wrapper">

                <Sidebar />

                <div className="main-panel">
                    <div className="content-wrapper">

                        <BranchTAble />
                    </div>
                </div>
            </div>

        </>
    )
};
export default BranchPage;