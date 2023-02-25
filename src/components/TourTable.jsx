import { useEffect, useState } from "react";
import axios from "axios";



const TourTable = () => {

    const [tourdata, setTourdata] = useState([]);


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/trippens/created/tours/')
            .then(response => setTourdata(response.data))


            .catch(error => console.error(error));
    }, []);



    return (
        <>
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Onbord tours</h4>

                        <div className="table-responsive pt-3">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>
                                            #
                                        </th>
                                        <th>
                                            Tour
                                        </th>
                                        <th>
                                            Tour Id
                                        </th>
                                        <th>
                                            PLace
                                        </th>
                                        <th>
                                            Place Discription
                                        </th>
                                        <th>
                                            Addon
                                        </th>
                                        <th>
                                            Addon Discription
                                        </th>
                                        <th>
                                            Addon Price
                                        </th>
                                        <th>
                                            Activity

                                        </th>
                                        <th>
                                            Activity Description

                                        </th>
                                        <th>
                                            Activity Price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tourdata.map((item) => (
                                        <tr key={item.id}>
                                            <td>
                                                {item.id}
                                            </td>
                                            <td>
                                                {item.name.name}
                                            </td>
                                            <td>
                                                {item.name.tour_id}
                                            </td>
                                            <td>
                                                {item.activity.name}
                                            </td>
                                            <td>
                                                <textarea value={item.activity.description} cols="20"  className="tabletext" rows="5">

                                                    {item.activity.description}
                                                </textarea>
                                            </td>
                                            <td>
                                                {item.addon.name}
                                            </td><td>
                                                <textarea value={item.addon.description} cols="20" className="tabletext" rows="5">
                                                </textarea>

                                            </td><td>
                                                {item.addon.price}
                                            </td><td>
                                                {item.activity.name}
                                            </td><td>
                                            <textarea value={item.activity.description} cols="20" className="tabletext" rows="5 ">
                                                </textarea>
                                            </td><td>
                                                {item.activity.price}
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
}
export default TourTable;
