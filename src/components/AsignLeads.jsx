import React, { useState, useEffect } from "react";
import axios from "axios";




const AsignLeads = () => {


    const [staff, setStaff] = useState([]);
    const [customers, setCustomer] = useState([]);
    const [selectedStaff, setSelectedStaff] = useState(null);
    const [selectedCustomers, setSelectedCustomers] = useState([]);


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/user_managment/list/staffs')
            .then(res => {
                setStaff(res.data);
            })
            .catch(err => console.log(err));
        axios.get('http://127.0.0.1:8000/user_managment/list/customer')
            .then(res => {
                setCustomer(res.data);
            })
            .catch(err => console.log(err));
    }, []);


    const handleStaffChange = (e) => {
        setSelectedStaff(e.target.value);
    };


    const handleCustomerChange = (e) => {
        const customer = e.target.value;

        if (e.target.checked) {
            setSelectedCustomers([...selectedCustomers, customer]);
        } else {
            setSelectedCustomers(selectedCustomers.filter((val) => val !== customer));
        }
    };


    const handleSubmit = (e) => {
        // console.log(selectedCustomers)
        // console.log(selectedStaff)
        e.preventDefault();
        const data = {
            staff: selectedStaff,
            customer: JSON.stringify([selectedCustomers])
        };


        console.log(data)
        axios.post('http://127.0.0.1:8000/user_managment/asign/customer', data)


            .then(res => console.log(res.data))


            .catch(err => console.log(err));
    };


    return (

        <>

            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <h4 className="card-title">Assign Customer to staff</h4>
                            <label >SELECT STAFF :</label>
                            <br />
                            <div className="row">

                                <div className="form-group col-5">
                                    <select value={selectedStaff} onChange={handleStaffChange} className="form-control form-control-sm" id="exampleFormControlSelect3">
                                        <option value="">-- Select user --</option>
                                        {staff.map(user => (
                                            <option key={user.id} value={user.id}>{user.username}</option>
                                        ))}
                                    </select>

                                </div>
                                <div className="col-3">
                                    <span>STAFF ID : <span>{selectedStaff}</span> </span>
                                </div>

                                <div className="col-4">

                                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                                </div>
                            </div>
                            <div className="table-responsive pt-3">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>
                                                Select
                                            </th>
                                            <th>
                                                First name
                                            </th>
                                            <th>
                                                Progress
                                            </th>
                                            <th>
                                                Amount
                                            </th>
                                            <th>
                                                Deadline
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {customers.map(customer => (
                                            <tr key={customer.id} >
                                                <td>
                                                    <input value={customer.id} onChange={handleCustomerChange} type="checkbox" className="form-check-input" />
                                                </td>
                                                <td>
                                                    {customer.id}
                                                </td>
                                                <td>
                                                    {customer.name}
                                                </td>
                                                <td>
                                                    $ 77.99
                                                </td>
                                                <td>
                                                    May 15, 2015
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        </>


    )
}
export default AsignLeads;