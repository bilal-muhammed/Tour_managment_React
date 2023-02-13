import React, { useState, useEffect, useContext } from "react";
import BranchTAble from "../components/BranchTable";

 


const BranchPage = () => {


    return (
        <>

                <div className="main-panel">
                    <div className="content-wrapper">

                        <BranchTAble />
                    </div>
                </div>
            

        </>
    )
};
export default BranchPage;