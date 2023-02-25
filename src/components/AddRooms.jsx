import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";



const AddRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://127.0.0.1:8000/admin-side/list/rooms');
                const data = await response.json();
                setRooms(data);
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
            const response = await fetch('http://127.0.0.1:8000/admin-side/list/rooms', {
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
            setRooms([...rooms, data]);
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
        const response = await fetch(`http://127.0.0.1:8000/admin-side/rooms/update/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            setRooms(rooms.filter(item => item.id !== id));
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
                    <div className="card-body">
                        <h4 className="card-title">Add Rooms</h4>

                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-4">

                                    <div className="form-group">
                                        <label>Room Category</label>
                                        <br />
                                        <input type="text" required value={category} onChange={handleCategoryChange} className="form-control form-control-sm" placeholder="Luxury/Economy/Delux" aria-label="Username" />
                                    </div>
                                </div>
                                <div className="col-4">


                                    <div className="form-group">
                                        <label>Room Name</label>
                                        <br />
                                        <input type="text" value={name} required onChange={handleNameChange} className="form-control form-control-sm" placeholder="Name" aria-label="Username" />
                                    </div>
                                </div>
                                <div className="col-4">


                                    <div className="form-group">
                                        <label>Room Price</label>
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
                        <h4 className="card-title">Available Rooms</h4>

                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>SL.No</th>
                                        <th>Room Name</th>
                                        <th>Room Category</th>
                                        <th>Room Price / Day</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rooms.map((rooms) => (
                                        <tr key={rooms.id}>
                                            <td>{rooms.id}</td>
                                            <td>{rooms.name}</td>
                                            <td>{rooms.category}</td>
                                            <td>{rooms.price}</td>
                                            <td>{rooms.is_available }
                                            <button type="button" className="btn btn-success btn-rounded btn-fw">Not</button>
                                            <button type="button" className="btn btn-secondary btn-rounded btn-fw">Sec</button>
                                            </td>
                                            <td>
                                                <button onClick={() => handleDelete(rooms.id)} type="button" className="btn btn-danger btn-rounded btn-fw text-light">Delete</button>
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
export default AddRooms;