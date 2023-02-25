import React, { useState, useEffect, useContext } from "react";
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'
import axios from "axios";


const AddCustomerForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [pax, setPax] = useState('');
    const [category, setCategory] = useState('');
    const [tour, setTour] = useState('');
    const [branch, setBranch] = useState('');
    const [type, setType] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [progress, setProgress] = useState('');
    const [source, setSource] = useState('');
    const [remarks, setRemarks] = useState('');
    const [branches, setBranches] = useState([]);
    const [newcustomer, setNewcustomer] = useState([]);


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/admin-side/list/branches')
            .then(response => setBranches(response.data))
        axios.get('http://127.0.0.1:8000/user_managment/list/todays/customer')
            .then(response => setNewcustomer(response.data))


            .catch(error => console.error(error));
    }, [newcustomer]);





    const handleSubmit = event => {
        event.preventDefault();
        const data = {
            branch: branch,
            address: address,
            name: name,
            phone: phone,
            whatsapp: whatsapp,
            city: city,
            type: type,
            address: address,
            category: category,
            tour: tour,
            email: email,
            progress: progress,
            remarks: remarks,
            source: source,
            vehicle: vehicle,
            pax: pax

        };
        axios.post('http://127.0.0.1:8000/user_managment/add/customer', data)
            .then(response => {
                setNewcustomer([...newcustomer, response.data]);
                console.log(response.data);
                setName('');
                setAddress('');
                setBranch('');
                setCategory('');
                setCity('');
                setEmail('');
                setPax('');
                setProgress('');
                setRemarks('');
                setPhone('');
                setTour('');
                setType('');
                setWhatsapp('');
                setVehicle('');
                setSource('');


            })
            .catch(error => console.error(error));
    }

    return (
        <>

            <div className="col-12 grid-margin">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title align-left">Add Customer</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="container ">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Name</label>
                                                <input value={name} onChange={event => setName(event.target.value)} type="text" placeholder="Full Name" className="form-control form-control-sm" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label htmlFor="phone" className="col-sm-3 col-form-label">Phone</label>
                                                <input value={phone} onChange={event => setPhone(event.target.value)} id="phone" type="tel" maxLength="10" className="form-control form-control-sm" placeholder="Phone Number" />




                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Vehicle</label>
                                                <input value={vehicle} onChange={event => setVehicle(event.target.value)} type="text" className="form-control form-control-sm" placeholder="Customer Perferd Vehicle" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Branch</label>
                                                <select value={branch} onChange={event => setBranch(event.target.value)} className="form-control form-control-sm" id="exampleFormControlSelect3">
                                                    {branches.map(branch => (
                                                        <option key={branch.id} value={branch.id}>{branch.name}</option>
                                                    ))}

                                                </select>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Progress</label>
                                                <input value={progress} onChange={event => setProgress(event.target.value)} type="text" placeholder="Customer Progress" className="form-control-sm form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">


                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">City</label>
                                                <input value={city} onChange={event => setCity(event.target.value)} placeholder="Location" type="text" className="form-control form-control-sm" />

                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">WhatsApp</label>
                                                <input type="tel" value={whatsapp} onChange={event => setWhatsapp(event.target.value)} className="form-control-sm form-control" placeholder="WhatsApp Number" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Pax</label>
                                                <input type="number" value={pax} onChange={event => setPax(event.target.value)} placeholder="Additional Members" className="form-control-sm form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Source</label>
                                                <input type="text" value={source} onChange={event => setSource(event.target.value)} placeholder="Refered By" className="form-control-sm form-control" />

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Address </label>
                                                <input type="text" value={address} onChange={event => setAddress(event.target.value)} placeholder="Address" className="form-control form-control-sm" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Category</label>
                                                <input type="text" value={category} onChange={event => setCategory(event.target.value)} placeholder="Brand Category" className="form-control form-control-sm" />

                                                {/* <select className="form-control form-control-sm" id="exampleFormControlSelect3">
                                            <option value="Trippens">Trippens</option>
                                            <option value="Diksha">Diksha</option>
                                            <option value="Gossip">Gossip</option>
                                            <option value="Team Adventure">Team Adventure</option>
                                            </select> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Remarks</label>
                                                <input value={remarks} onChange={event => setRemarks(event.target.value)} placeholder="Customer's Remarks" type="text" className="form-control form-control-sm" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Type</label>
                                                <input value={type} onChange={event => setType(event.target.value)} placeholder="Customer Type" type="text" className="form-control form-control-sm" />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Tour</label>
                                                <input value={tour} onChange={event => setTour(event.target.value)} placeholder="Customer Prefered Tour" type="text" className="form-control form-control-sm" />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Email</label>
                                                <input value={email} onChange={event => setEmail(event.target.value)} placeholder="Customer Email " type="text" className="form-control form-control-sm" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <button type="submit" className="btn btn-primary me-2">Submit</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>


            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Today Enquired Customer's</h4>
                        
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>
                                            SL.NO
                                        </th>
                                        <th>
                                            Cuatomer Name
                                        </th>
                                        <th>
                                            Phone
                                        </th>
                                        <th>
                                            Date
                                        </th>
                                        <th>
                                            Tour
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {newcustomer.map(customer => (

                                        <tr key={customer.id}>
                                            <td className="py-1">
                                                {customer.id}
                                            </td>
                                            <td>
                                            {customer.name}

                                            </td>
                                            <td>
                                            {customer.phone}

                                            </td>
                                            <td>
                                            {customer.is_created}

                                            </td>
                                            <td>
                                            {customer.tour}

                                            </td>
                                        </tr>
                                    ))}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>



    )
};
export default AddCustomerForm;
