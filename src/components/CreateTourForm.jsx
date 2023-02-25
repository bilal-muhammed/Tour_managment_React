import React, { useState, useEffect, } from "react";
import axios from 'axios'


const CreateTourForm = () => {


    const [tourid, setTourid] = useState('');
    const [place, setPlace] = useState('');
    const [placedisc, setPlacedisc] = useState('');
    const [addon, setAddon] = useState('');
    const [addondisc, setAddondisc] = useState('');
    const [addonprice, setAddonprice] = useState('');
    const [activity, setActivity] = useState('');
    const [activityprice, setActivityprice] = useState('');
    const [activitydisc, setActivitydisc] = useState('');

    const [tour, setTour] = useState([]);

 
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/trippens/tours')
            .then(response => setTour(response.data))


            .catch(error => console.error(error));
    }, []);

    const handleChange = event => {
        console.log(event.target.value);
        // setTour(event.target.value);
        setTourid(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const data = {
            tour: {
                name: tourid,

            },
            place: {
                name: place,
                description: placedisc

            },
            addon: {
                name: addon,
                description: addondisc,
                price: addonprice
            },
            activity: {
                name: activity,
                description: activitydisc,
                price: activityprice
            },

        }




        axios.post('http://127.0.0.1:8000/trippens/add/tour/details', data)
            .then(response => {
                console.log(response.data);
                // setBranches([...branches, response.data]);
                setPlace('')
                setPlacedisc('')
                setAddondisc('')
                setAddon('')
                setAddonprice('')
                setActivity('')
                setActivitydisc('')
                setActivityprice('')
 

            })
            .catch(error => console.error(error));

    }



    return (

        <>

            <div className="col-12 grid-margin">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Create Tour</h4>
                        <div className="container">
                            <div className="col-md-4 ">
                                <div className="form-group row">
                                    <div className="col-sm-9">
                                        <label className="col-sm-3 col-form-label">Tour</label>
                                        <select value={tourid} onChange={handleChange} className="form-control form-control-sm" id="exampleFormControlSelect3">
                                            {tour.map(tours => (
                                                <option key={tours.id} value={tours.id}>{tours.name}</option>
                                            ))}

                                        </select>
                                    </div>
                                    <label className="col-sm-3 col-form-label"><b>Tour_Id:</b> <span> <b>{tourid}   </b></span></label>


                                </div>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="row ">

                                    <div className="col-md-4 ">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Place</label>
                                                <input value={place} onChange={event => setPlace(event.target.value)} type="text" className="form-control-sm form-control" />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Addon</label>
                                                <input value={addon} onChange={event => setAddon(event.target.value)} type="text" className="form-control-sm form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Activity</label>
                                                <input type="text" value={activity} onChange={event => setActivity(event.target.value)} className="form-control form-control-sm" />
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Description</label>
                                                <textarea value={placedisc} onChange={event => setPlacedisc(event.target.value)} className="form-control" id="exampleTextarea1" rows="4"></textarea>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Description</label>
                                                <textarea value={addondisc} onChange={event => setAddondisc(event.target.value)} className="form-control" id="exampleTextarea1" rows="4"></textarea>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Description</label>
                                                <textarea value={activitydisc} onChange={event => setActivitydisc(event.target.value)} className="form-control" id="exampleTextarea1" rows="4"></textarea>


                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                {/* <label className="col-sm-3 col-form-label">City</label> */}
                                                {/* <input type="text" className="form-control form-control-sm" /> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Price </label>
                                                <input type="text" value={addonprice} onChange={event => setAddonprice(event.target.value)} className="form-control form-control-sm" />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-3 col-form-label">Price</label>
                                                <input type="text" value={activityprice} onChange={event => setActivityprice(event.target.value)} className="form-control form-control-sm" />





                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <button type="submit" className="btn btn-primary me-2">Create Tour</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            
            
        </>
    )

};


export default CreateTourForm;