import React, { useState, useEffect, useContext } from "react";

import Header from "../components/Header";
import ResponseTable from "../components/ResponseTable";
import Sidebar from "../components/Sidebar";


const ResponsePage = () => {
    return (
        <>

            <Header />

            <div className="container-fluid page-body-wrapper">

                <Sidebar />

                <div className="main-panel">
                    <div className="content-wrapper">

                        <ResponseTable />
                    </div>
                </div>
            </div>
        </>
    )
};
export default ResponsePage;