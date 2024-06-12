import React, { useState } from 'react'

import axios from 'axios'

const AddStudent = () => {
    const [data, setData] = useState(
        {
            "name": "",
            "department": "",
            "designation": "",
            "salary": ""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8081/", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("add successfully")
                } else {
                    alert("error")
                }
            }
        ).catch()
    }
    return (
        <div>
            <h1><center>EMPLOYEE REGISTRATION</center></h1>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"></label>
                                name
                                <input type="text" className="form-control" name='name' value={data.name}onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"></label>
                            department
                                <input type="text" className="form-control" name='department' value={data.department}onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"></label>
                            designation
                                <input type="text" className="form-control" name='designation' value={data.designation}onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"></label>
                            salary
                                <input type="text" className="form-control" name='salary' value={data.salary}onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudent