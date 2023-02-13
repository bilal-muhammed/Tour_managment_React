import React, { useState, useEffect, useContext } from "react";

import CustomerTable from "../components/CustomerTable";


const CustomerPage = () => {


    return (


        <>


                    <div className="main-panel">
                        <div className="content-wrapper">

                            <CustomerTable/>
                        </div>
                    </div>
        </>

    )
};
export default CustomerPage;