import React, { useState, useEffect, useContext } from "react";
import TourTable from "../components/TourTable";


const TourPage = () => {
    return (
        <>


                <div className="main-panel">
                    <div className="content-wrapper">

                        <TourTable />
                    </div>
                </div>
            
        </>
    )
};
export default TourPage;