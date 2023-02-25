import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";



const AddTours = () => {
    const [tours, setTours] = useState([]);
    const [name, setName] = useState('');
    const [tour_id, setTour_id] = useState('');
    


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://127.0.0.1:8000/trippens/tours');
                const data = await response.json();
                setTours(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleIdChange = (event) => {
        setTour_id(event.target.value);
    };

    

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/trippens/tours', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    tour_id: tour_id
                    
                })
            });
            const data = await response.json();
            console.log(data);
            setTours([...tours, data]);
            setName('');
            setTour_id('');
            // Optionally, redirect to the book list page or display a success message
        } catch (error) {
            console.error(error);
            // Optionally, display an error message to the user
        }
    };



    const handleDelete = async (id) => {
        const response = await fetch(`http://127.0.0.1:8000/trippens/tours/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            setTours(tours.filter(item => item.id !== id));
        }
    };


    return (
        <>
            <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body d-flex justify-content-evenly">
                     <Link to="/add_components"><button type="button" className="btn btn-danger">Add Vehicles</button></Link>
                     <Link to ="/add_rooms"> <button type="button" className="btn btn-danger">Add Rooms</button></Link>
                        <Link to ="/add_tours"> <button type="button" className="btn btn-danger">Add Tours</button></Link>
                       
                    </div>
                </div>
            </div>

            <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body container">
                        <h4 className="card-title">Add Trippens Tours</h4>

                        <form onSubmit={handleSubmit}>
                            <div className="row d-flex justify-content-evenly">
                                <div className="col-6">

                                    <div className="form-group">
                                        <label>Tour Name</label>
                                        <br />
                                        <input type="text" required value={tour_id} onChange={handleIdChange} className="form-control form-control-sm" placeholder="Enter New Tour" aria-label="Username" />
                                    </div>
                                </div>
                                <div className="col-6">


                                    <div className="form-group">
                                        <label>Tour ID</label>
                                        <br />
                                        <input type="text" value={name} required onChange={handleNameChange} className="form-control form-control-sm" placeholder="Enter Tour ID " aria-label="Username" />
                                    </div>
                                
                                </div>
                                <div className="container">
                                    <button type="submit" className="btn btn-info">Save</button>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <div className="col-md-12 grid-margin stretch-card">
                <div className="card">

                    <div className="card-body">
                        <h4 className="card-title">Available Tours</h4>

                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>SL.No</th>
                                        <th>Tour Name</th>
                                        <th>Tour ID</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tours.map((tour) => (
                                        <tr key={tour.id}>
                                            <td>{tour.id}</td>
                                            <td>{tour.name}</td>
                                            <td>{tour.tour_id}</td>
                                            
                                            <td>
                                                <button onClick={() => handleDelete(tour.id)} type="button" className="btn btn-danger btn-rounded btn-fw text-light">Delete</button>
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
export default AddTours;