import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';
import axios from "axios";
import Cookies from 'js-cookie';

import './style.css';
import MotionHoc from '../MotionHoc';
import UserProfile from '../../../Session';

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: [],
            user: [],
            userId:Cookies.get("userId"),
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:8080/api/user/${this.state.userId}`,{withCredentials: true})
            .then((res) => {
                console.log(res.data)
                this.setState({
                    user: res.data,
                })
                UserProfile.setName(this.state.user.name);
            })
        axios.get(`http://localhost:8080/api/admin/${this.state.userId}`)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    admin: res.data,
                })
            })
    }
    render() {
        const handleRegistration = () => {
            axios.get(`http://localhost:8080/api/department/closeRegister/${this.state.userId}`)
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
            axios.get(`http://localhost:8080/api/department/closeWithdraw/${this.state.userId}`)
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
            axios.get(`http://localhost:8080/api/department/startSemester/${this.state.userId}`)
                .then((res) => {
                    console.log(res.data)
                    if (res.data === -1) {
                        alert("Error");
                    } else {
                        alert("New Semester Started Successfully");
                    }
                })
        }
        const handletranscript = () => {
            axios.get(`http://localhost:8080/api/transcript/generateTranscript/${this.state.user.departmentID}`)
                .then((res) => {
                    console.log(res.data)
                    if (res.data === -1) {
                        alert("Transcript cannot be Generated at the moment");
                    } else {
                        alert("Transcripts Generated Successfully");
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
                        <button className="modalbtn" onClick={()=>handletranscript()}>Generate Transcript</button>
                        <button className="modalbtn" onClick={()=>handlesemester()}>Start New Semester</button>
                    </div>
                </div>

            </>
        )
    }
}

const Home = MotionHoc(HomeComponent);

export default Home;
