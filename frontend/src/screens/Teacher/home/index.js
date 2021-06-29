import React, { Component } from 'react'
import axios from 'axios';


import MotionHoc from '../MotionHoc';
import UserProfile from '../../../Session';
import './style.css'

class HomeComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      campus:'Lahore',
      user:[],
      teacher:[],
    };
  }
  componentDidMount(){
    axios.get(`http://localhost:8080/api/user/${UserProfile.getId()}`)
    .then((res)=>{
    console.log(res.data)
      this.setState({
        user:res.data,
      })
    UserProfile.setName(this.state.user.name);
    })
    axios.get(`http://localhost:8080/api/teacher/${UserProfile.getId()}`)
    .then((res)=>{
      console.log(res.data)
      this.setState({
        teacher:res.data,
      })
    })
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
              <p> <span style={{ fontweight: 300, marginleft: "-5%" }}><b> Salary : </b></span> <span> {this.state.teacher.salary}  </span>  </p>
              <p > <span style={{ fontweight: 300, marginleft: "-106px" }}><b>  Campus : </b></span> {this.state.campus} <span> </span> </p>
            </div>
            <div class="columnspan">
              <p > <span style={{ fontweight: 300, marginleft: "-75%" }}><b> Date Joined : </b></span> <span> {this.state.teacher.dateJoined} </span> </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="rowitem">
            <h3 style={{ color: 'black' }}> Personal Information</h3>
          </div>
          <div class="originalinfo">
          <div class="columnspan">
              <p> <span style={{ fontweight: 300, marginleft: "-5%" }}><b> Name  : </b></span> <span> {this.state.user.name}  </span>  </p>
              <p > <span style={{ fontweight: 300, marginleft: "-106px" }}><b>  Gender : </b></span> {this.state.user.gender} <span> </span> </p>
            </div>
            <div class="columnspan">
              <p > <span style={{ fontweight: 300, marginleft: "-75%" }}><b> Date of Birth : </b></span> <span> {this.state.user.dob} </span> </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="rowitem">
            <h3 style={{ color: 'black' }}> Contact Information</h3>
          </div>
          <div class="originalinfo">
          <div class="columnspan">
              <p> <span style={{ fontweight: 300, marginleft: "-5%" }}><b> Email  : </b></span> <span> {this.state.user.email}  </span>  </p>
              <p > <span style={{ fontweight: 300, marginleft: "-106px" }}><b>  PhoneNumber : </b></span> {this.state.user.mobileno} <span> </span> </p>
            </div>
            <div class="columnspan">
              <p > <span style={{ fontweight: 300, marginleft: "-75%" }}><b> Password : </b></span> <span> {this.state.user.password} </span> </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const Home = MotionHoc(HomeComponent);

export default Home;