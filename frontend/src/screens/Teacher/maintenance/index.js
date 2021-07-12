import React, { Component } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';

import MotionHoc from '../MotionHoc';
import './style.css';
import UserProfile from '../../../Session';

class MaintenanceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:-1,
      name: '',
      username: '',
      cnic: '',
      mobileno: '',
      dob: '',
      password: '',
      nationality: '',
      gender: '',
      email: '',
      userType: '',
      departmentID: 0,
      user: [],
      userId:Cookies.get("userId"),
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:8080/api/user/${this.state.userId}`)
      .then((res) => {
        console.log(res.data)
        this.setState({
          user: res.data,
          id: res.data.id,
          name: res.data.name,
          username: res.data.username,
          cnic: res.data.cnic,
          mobileno: res.data.mobileno,
          dob: res.data.dob,
          password: res.data.password,
          nationality: res.data.nationality,
          gender: res.data.gender,
          email: res.data.email,
          userType: res.data.userType,
          departmentID: res.data.departmentID,
        })
      })
  }
  render() {
    const submit=()=> {
      axios.put("http://localhost:8080/api/user/", {
        id: this.state.id,
        name: this.state.name,
        username: this.state.username,
        cnic: this.state.cnic,
        mobileno: this.state.mobileno,
        dob: this.state.dob,
        password: this.state.password,
        nationality: this.state.nationality,
        gender: this.state.gender,
        email: this.state.email,
        userType: this.state.userType,
        departmentID: this.state.departmentID,
      })
    }
    return (
      <>
        <div id="main">
          <div id="first">
            <h1>Edit Profile</h1>
          </div>
        </div>
        <div id="contentt">
          <div className="subContent">
            <h3>Name</h3>
            <input value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} type="text" />
          </div>
          <div className="subContent">
            <h3>UserName</h3>
            <input value={this.state.username} type="text" disabled />
          </div>
        </div>
        <div id="contentt">
          <div className="subContent">
            <h3>Date of Birth</h3>
            <input value={this.state.dob} type="text" disabled/>
          </div>
          <div className="subContent">
            <h3>CNIC</h3>
            <input value={this.state.cnic} onChange={(e) => this.setState({ cnic: e.target.value })} type="text" />
          </div>
        </div>
        <div id="contentt">
          <div className="subContent">
            <h3>Password</h3>
            <input value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} type="text"/>
          </div>
          <div className="subContent">
            <h3>PhoneNumber</h3>
            <input value={this.state.mobileno} onChange={(e) => this.setState({ mobileno: e.target.value })} type="text" />
          </div>
        </div>
        <div id="contentt">
          <div className="subContent">
            <h3>Gender</h3>
            <input value={this.state.gender} onChange={(e) => this.setState({ gender: e.target.value })} type="text"/>
          </div>
          <div className="subContent">
            <h3>Nationality</h3>
            <input value={this.state.nationality} onChange={(e) => this.setState({ nationality: e.target.value })} type="text" />
          </div>
        </div>
        <div id="contentt">
          <div className="subContent">
            <h3>Email</h3>
            <input value={this.state.email} type="text" disabled/>
          </div>
          <div className="subContent">
            <h3>Account Type</h3>
            <input value={this.state.type} type="text" disabled/>
          </div>
        </div>
        <div id="contentt">
          <div className="btnCont">
            <button className="btnd" onClick={submit()}><h2>Save</h2></button>
          </div>
        </div>
      </>
    )
  }
}

const Maintenance = MotionHoc(MaintenanceComponent);

export default Maintenance;