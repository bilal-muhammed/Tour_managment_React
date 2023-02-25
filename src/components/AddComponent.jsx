import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";




const AddComponent = () => {
    const [vehicles, setVehicles] = useState([]);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://127.0.0.1:8000/admin-side/list/vehicles');
                const data = await response.json();
                setVehicles(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/admin-side/list/vehicles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    category: category,
                    price: price
                })
            });
            const data = await response.json();
            console.log(data);
            setVehicles([...vehicles, data]);
            setName('');
            setCategory('');
            setPrice('');
            // Optionally, redirect to the book list page or display a success message
        } catch (error) {
            console.error(error);
            // Optionally, display an error message to the user
        }
    };



    const handleDelete = async (id) => {
        const response = await fetch(`http://127.0.0.1:8000/admin-side/vehicles/update/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            setVehicles(vehicles.filter(item => item.id !== id));
        }
    };


    return (
        <>
            <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body d-flex justify-content-evenly">
                        <button type="button" className="btn btn-danger">Add Vehicles</button>
                        <Link to ="/add_rooms"> <button type="button" className="btn btn-danger">Add Rooms</button></Link>
                        <Link to ="/add_tours"> <button type="button" className="btn btn-danger">Add Tours</button></Link>
                        
                    </div>
                </div>
            </div>

            <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Add Vehicles</h4>

                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-4">

                                    <div className="form-group">
                                        <label>Vechicle Category</label>
                                        <br />
                                        <input type="number" min="4" required value={category} onChange={handleCategoryChange} className="form-control form-control-sm" placeholder="No.Of Seats Required" aria-label="Username" />
                                    </div>
                                </div>
                                <div className="col-4">


                                    <div className="form-group">
                                        <label>Vehicle Name</label>
                                        <br />
                                        <input type="text" value={name} required onChange={handleNameChange} className="form-control form-control-sm" placeholder="Model Name" aria-label="Username" />
                                    </div>
                                </div>
                                <div className="col-4">


                                    <div className="form-group">
                                        <label>Vehicle Price</label>
                                        <br />
                                        <input type="number" value={price} onChange={handlePriceChange} className="form-control form-control-sm" placeholder="Price/Day" aria-label="Username" />
                                    </div>
                                    <br />
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
                        <h4 className="card-title">Vehicles Available</h4>

                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>SL.No</th>
                                        <th>Vehicle Name</th>
                                        <th>Category</th>
                                        <th>Price / Day</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {vehicles.map((vehicles) => (
                                        <tr key={vehicles.id}>
                                            <td>{vehicles.id}</td>
                                            <td>{vehicles.name}</td>
                                            <td>{vehicles.category}</td>
                                            <td>{vehicles.price}</td>
                                            <td>
                                                <button onClick={() => handleDelete(vehicles.id)} type="button" className="btn btn-danger btn-rounded btn-fw text-light">Delete</button>
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
export default AddComponent;