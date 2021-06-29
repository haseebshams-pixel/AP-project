import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';
import axios from "axios";

import './style.css';
import MotionHoc from '../MotionHoc';
import UserProfile from '../../../Session';

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: [],
            user: [],
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:8080/api/user/${UserProfile.getId()}`)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    user: res.data,
                })
                UserProfile.setName(this.state.user.name);
            })
        axios.get(`http://localhost:8080/api/admin/${UserProfile.getId()}`)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    admin: res.data,
                })
            })
    }
    render() {
        const handleRegistration = () => {
            axios.get(`http://localhost:8080/api/department/closeRegister/${UserProfile.getId()}`)
                .then((res) => {
                    console.log(res.data)
                    if (res.data === -1) {
                        alert("Registration Already Closed");
                    } else {
                        alert("Registration Closed Successfully");
                    }
                })
        }
        const handleWithdraw = () => {
            axios.get(`http://localhost:8080/api/department/closeWithdraw/${UserProfile.getId()}`)
                .then((res) => {
                    console.log(res.data)
                    if (res.data === -1) {
                        alert("Withdraw Period Already Closed");
                    } else {
                        alert("Withdraw Period Closed Successfully");
                    }
                })
        }
        const handlesemester = () => {
            axios.get(`http://localhost:8080/api/department/startSemester/${UserProfile.getId()}`)
                .then((res) => {
                    console.log(res.data)
                    if (res.data === -1) {
                        alert("Error");
                    } else {
                        alert("New Semester Started Successfully");
                    }
                })
        }
        return (
            <>
                <div className="adStart">
                    <h1>DashBoard</h1>
                </div>
                <div className="adContentr">
                    <div className="pair">
                        <button className="modalbtn" data-toggle="modal" data-target="#myModal" onClick={()=>handleRegistration()}>Close Registration</button>
                        <button className="modalbtn" onClick={()=>handleWithdraw()}>Close WithDrawal</button>
                    </div>
                    <div className="pair">
                        <button className="modalbtn">Generate Transcript</button>
                        <button className="modalbtn" onClick={()=>handlesemester()}>Start New Semester</button>
                    </div>
                </div>

            </>
        )
    }
}

const Home = MotionHoc(HomeComponent);

export default Home;
