import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';



export default class CustomerTable extends React.Component {
    state = {
        customer: []
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/user_managment/list/customer`)
            .then(res => {
                const customer = res.data;
                this.setState({ customer });
            })
    }

    render() {
        return (
            <>
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Bordered table</h4>
                            <div className="table-responsive pt-3">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>
                                                SL.NO
                                            </th>
                                            <th>
                                                Date
                                            </th>
                                            <th>
                                                Customer Name
                                            </th>
                                            <th>
                                                Mobile
                                            </th>
                                            <th>
                                                Location
                                            </th>
                                            <th>
                                                Pax
                                            </th><th>
                                                Branch
                                            </th><th>
                                                Tour
                                            </th><th>
                                                Progress
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.customer
                                                .map(customer =>
                                                    
                                                
                                        <tr key={customer.id}>
                                            <td>
                                                {customer.id}
                                            </td>
                                            <td>
                                            {customer.is_created}
                                            </td>
                                            <td>
                                            {customer.name}
                                            </td><td>
                                            {customer.phone}
                                            </td><td>
                                            {customer.city}
                                            </td>
                                            <td>
                                            {customer.pax}
                                            </td>
                                            <td>
                                            {customer.branch.name }
                                            </td>
                                            <td>
                                            {customer.tour}
                                            </td><td>
                                            {customer.progress}
                                            </td>
                                            
                                        </tr>
                                        )
                                    }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">


                        </div>

                    </div>
                </div>
            </>
        )
    }
}