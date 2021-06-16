import MotionHoc from '../MotionHoc';

import './style.css'

import React, { Component } from 'react'

class HomeComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:'Sarim Baig',
      post:'Head Instructor',
      degree:'BS(CS)',
      campus:'Lahore',
      age:'31',
      gender:'Male',
      email:'sarim.baig@nu.edu.pk',
      password:'123456',
      phonenumber:'03077044820',
    };
  }
  render() {
    return (
      <div>
        <div class="rowfirst">
          <div class="rowitem">
            <h3 style={{ color: 'black' }}> University Information</h3>
          </div>
          <div class="originalinfo">
            <div class="columnspan">
              <p> <span style={{ fontweight: 300, marginleft: "-5%" }}><b> Post : </b></span> <span> {this.state.post}  </span>  </p>
              <p > <span style={{ fontweight: 300, marginleft: "-106px" }}><b>  Campus : </b></span> {this.state.campus} <span> </span> </p>
            </div>
            <div class="columnspan">
              <p > <span style={{ fontweight: 300, marginleft: "-75%" }}><b> Degree : </b></span> <span> {this.state.degree} </span> </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="rowitem">
            <h3 style={{ color: 'black' }}> Personal Information</h3>
          </div>
          <div class="originalinfo">
          <div class="columnspan">
              <p> <span style={{ fontweight: 300, marginleft: "-5%" }}><b> Name  : </b></span> <span> {this.state.name}  </span>  </p>
              <p > <span style={{ fontweight: 300, marginleft: "-106px" }}><b>  Gender : </b></span> {this.state.gender} <span> </span> </p>
            </div>
            <div class="columnspan">
              <p > <span style={{ fontweight: 300, marginleft: "-75%" }}><b> Age : </b></span> <span> {this.state.age} </span> </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="rowitem">
            <h3 style={{ color: 'black' }}> Contact Information</h3>
          </div>
          <div class="originalinfo">
          <div class="columnspan">
              <p> <span style={{ fontweight: 300, marginleft: "-5%" }}><b> Email  : </b></span> <span> {this.state.email}  </span>  </p>
              <p > <span style={{ fontweight: 300, marginleft: "-106px" }}><b>  PhoneNumber : </b></span> {this.state.phonenumber} <span> </span> </p>
            </div>
            <div class="columnspan">
              <p > <span style={{ fontweight: 300, marginleft: "-75%" }}><b> Password : </b></span> <span> {this.state.password} </span> </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const Home = MotionHoc(HomeComponent);

export default Home;