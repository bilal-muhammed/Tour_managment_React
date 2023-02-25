import React, { useState, useEffect, useContext } from "react";
import CreateTourForm from "../components/CreateTourForm";
 


const CreateTourPage = () => {


    return (
        <>

                <div className="main-panel">
                    <div className="content-wrapper">

                        <CreateTourForm />
                    </div>
                </div>
            

        </>
    )
};
export default CreateTourPage;