import React, { useState, useEffect } from "react";
import axios from 'axios';



const AddStaffForm = () => {

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [branch, setBranch] = useState('');
    const [desig, setDesigantion] = useState('');
    const [adhar_no, setAdhrno] = useState('');
    const [propic, setPropic] = useState(null);
    const [image, setImage] = useState(null);
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [branches, setBranches] = useState([]);
    const [designatons, setDesignations] = useState([]);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/admin-side/list/branches')
            .then(response => setBranches(response.data))
        axios.get('http://127.0.0.1:8000/admin-side/designations/')
            .then(response => setDesignations(response.data))


            .catch(error => console.error(error));
    }, []);

    const handleFileChange = (event) => {
        const propic = event.target.files[0];
        setPropic(propic);
        const imageUrl = URL.createObjectURL(propic);
        setImagePreviewUrl(imageUrl);
    }
    const handleImageChange = (event) => {
        const image = event.target.files[0];
        setImage(image);
        const imgUrl = URL.createObjectURL(image);
        setImagePreviewUrl(imgUrl);
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image',image);
        formData.append('profile_pic', propic);
        formData.append('username', username);
        formData.append('name', name);
        formData.append('address', address);
        formData.append('branch', branch);
        formData.append('designation', desig);
        formData.append('adhar_no', adhar_no);
        formData.append('phone', phone);
        formData.append('password', password);
        // const data = {
        //     username: username,
        //     name: name,
        //     address: address,
        //     branch: branch,
        //     designation: desig,
        //     adhar_no: adhar_no,
        //     profile_pic: propic,
        //     image: image,
        //     password: password,
        //     phone: phone,
        try {
            const response = await axios.post('http://127.0.0.1:8000/user_managment/add/staff', formData);
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
        }

//     };
// //     axios.post('http://127.0.0.1:8000/user_managment/add/staff', formData)
// //         .then(response => {
// //             // setBranches([...branches, response.data]);
// //             console.log(response.data);
// //             setUsername('');
// //             setName('');
// //             setAddress('');
// //             setBranch('');
// //             setDesigantion('');
// //             setAdhrno('');
// //             setPropic('');
// //             setImage('');
// //             setPhone('');
// //             setPassword('');



// //         })
// //         .catch(error => console.error(error));
// // }

return (
    <>
        <div className="col-12 grid-margin">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Add Staff</h4>
                    <form onSubmit={handleSubmit}>
                        <br />
                        <div className="container">

                            <div className="row " >
                                <div className="col-md-5">
                                    <div className="form-group row">
                                        <div className="col-sm-9">
                                            <label className="col-sm-3 col-form-label">Username</label>
                                            <input required value={username} onChange={event => setUsername(event.target.value)} type="text" placeholder="Enter Username" className="form-control form-control-sm" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="form-group row">
                                        <div className="col-sm-9">
                                            <label className="col-sm-3 col-form-label">Name</label>
                                            <input value={name} onChange={event => setName(event.target.value)} type="text" placeholder="Full Name" className="form-control form-control-sm" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className=" col-4 " >

                                <br />
                                <div>
                                    {imagePreviewUrl ? (

                                        <img className="staffpic circle" src={imagePreviewUrl} alt="Preview" />
                                    ) : (
                                        <div className="small-12 medium-2 large-2 columns">

                                            <p>upload image here</p>
                                        </div>

                                    )}

                                </div>
                                <input placeholder="upload profile pic" type="file" onChange={handleFileChange} />

                            </div>



                            <div className="row">
                                <div className="col-md-4">

                                    <div className="form-group row">
                                        <div className="col-sm-9">
                                            <label className="col-sm-3 col-form-label">Password</label>
                                            <input value={password} onChange={event => setPassword(event.target.value)} type="text" className="form-control form-control-sm" placeholder="Enter Password" />
                                        </div>
                                    </div>



                                </div>

                                <div className="col-md-4">
                                    <div className="form-group row">
                                        <div className="col-sm-9">
                                            <label className="col-sm-3 col-form-label">Address</label>
                                            <input value={address} onChange={event => setAddress(event.target.value)} className="form-control form-control-sm" placeholder="Address" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group row">
                                        <div className="col-sm-9">
                                            <label className="col-sm-3 col-form-label">Designaton</label>
                                            <select value={desig} onChange={event => setDesigantion(event.target.value)} className="form-control form-control-sm" >
                                                {designatons.map(designation => (
                                                    <option key={designation.id} value={designation.id}>{designation.designation}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group row">
                                        <div className="col-sm-9">
                                            <label className="col-sm-3 col-form-label">Mobile </label>
                                            <input value={phone} onChange={event => setPhone(event.target.value)} type="tell" placeholder="Contact Number" className="form-control-sm form-control" />
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
                                            <label className="col-sm-3 col-form-label">Adhar_Number</label>
                                            <input type="text" value={adhar_no} onChange={event => setAdhrno(event.target.value)} className="form-control form-control-sm" placeholder="Adhar Number" />
                                            <input type="file" onChange={ handleImageChange } className="form-control form-control-sm" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <button type="submit" className="btn btn-primary me-2">Submit</button>

                    </form>
                </div>
            </div>
        </div>


    </>
)
}

export default AddStaffForm