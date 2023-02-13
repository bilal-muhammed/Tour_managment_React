import React, { useState, useEffect, useContext } from "react";

import StaffTable from "../components/StaffTable";


const StaffDetailsPage = () => {


    return (
        <>

                <div className="main-panel">
                    <div className="content-wrapper">

                        <StaffTable />
                    </div>
                </div>

        </>
    )
};
export default StaffDetailsPage;