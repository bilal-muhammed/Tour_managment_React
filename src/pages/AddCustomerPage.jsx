import React, { useState, useEffect, useContext } from "react";

import AddCustomerForm from "../components/AddCustomerForm";


const AddCustomerPage = () => {

    return (



        <>


            <div className="main-panel">
                <div className="content-wrapper">

                    <AddCustomerForm />
                </div>
            </div>
        </>

    )
};
export default AddCustomerPage;