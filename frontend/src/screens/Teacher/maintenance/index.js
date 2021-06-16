import React, { Component } from 'react'

import MotionHoc from '../MotionHoc';
import './style.css';

class MaintenanceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'Sarim Baig',
      age:'31',
      gender:'Male',
      email:'sarim.baig@nu.edu.pk',
      password:'123456',
      phonenumber:'03077044820',
      username:'sarimbaig-pixel',
      CNIC:'36501-6349484-7',
      DOB:'3-08-1999',
      nationality:'Pakistani',
      type:'Teacher',
    };
  }
  render() {
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
            <input value={this.state.name} type="text" />
          </div>
          <div className="subContent">
            <h3>UserName</h3>
            <input value={this.state.username} type="text" disabled />
          </div>
        </div>
        <div id="contentt">
          <div className="subContent">
            <h3>Date of Birth</h3>
            <input value={this.state.DOB} type="text" disabled/>
          </div>
          <div className="subContent">
            <h3>CNIC</h3>
            <input value={this.state.CNIC} type="text" />
          </div>
        </div>
        <div id="contentt">
          <div className="subContent">
            <h3>Password</h3>
            <input value={this.state.password} type="text"/>
          </div>
          <div className="subContent">
            <h3>PhoneNumber</h3>
            <input value={this.state.phonenumber} type="text" />
          </div>
        </div>
        <div id="contentt">
          <div className="subContent">
            <h3>Gender</h3>
            <input value={this.state.gender} type="text"/>
          </div>
          <div className="subContent">
            <h3>Nationality</h3>
            <input value={this.state.nationality} type="text" />
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
            <button className="btnd"><h2>Save</h2></button>
          </div>
        </div>
      </>
    )
  }
}

const Maintenance = MotionHoc(MaintenanceComponent);

export default Maintenance;