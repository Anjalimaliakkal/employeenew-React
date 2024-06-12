import React, { useState } from 'react'
import axios from 'axios'

const SearchEmployee = () => {
    const [data, setData] = useState(
        {
            "name": ""
        }
    )
    const [result, setResult] = useState([])
    const deleteEmployee = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8081/delete",input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("deleted succesfully")
                } else {
                    alert("error in deletion")
                }
            }
        ).catch().finally()
    }

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8081/search", data).then(
            (response) => {
                setResult(response.data)
            }
        ).catch().finally()

    }
    return (
        <div>
            <NavBar />
            <h1><center>SEARCH EMPLOYEES</center></h1>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"></label>
                                name
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">NAME</th>
                                        <th scope="col">DEPARTMENT</th>
                                        <th scope="col">DESIGNATION</th>
                                        <th scope="col">SALARY</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        result.map(
                                            (value, index) => {
                                                return <tr>
                                                    <th scope="row">{value.name}</th>
                                                    <td>{value.deapetment}</td>
                                                    <td>{value.designation}</td>
                                                    <td>{value.salary}</td>
                                                    <td>
                                                        <button className="btn btn-danger" onClick={() => { deleteEmployee(value._id) }}>DELETE</button>
                                                    </td>
                                                </tr>
                                            }
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchEmployee