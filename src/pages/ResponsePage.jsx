import React, { useState, useEffect, useContext } from "react";

import ResponseTable from "../components/ResponseTable";


const ResponsePage = () => {
    return (
        <>


                <div className="main-panel">
                    <div className="content-wrapper">

                        <ResponseTable />
                    </div>
                </div>
            
        </>
    )
};
export default ResponsePage;