import React, { Component } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';

import MotionHoc from '../MotionHoc';
import UserProfile from '../../../Session';
import './style.css'

class RegistrationComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userId : Cookies.get("userId"),
      value: 'A',
      courses: [],
      courseId: 0,
      regBool:0,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    axios.get(`http://localhost:8080/api/course/availableCourses/${this.state.userId}`)
      .then((res) => {
        this.setState({ courses: res.data });
        console.log(this.state.courses);
      })
    axios.get(`http://localhost:8080/api/department/getRegBool/${this.state.userId}`)
      .then((res) => {
        this.setState({ regBool: res.data });
      })
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }
  render() {

    const handleClick = () => {
      axios.get(`http://localhost:8080/api/register/registerCourse/${this.state.userId}/d${this.state.value}/${this.state.courseId}`)
        .then((res) => {
          console.log(res.data);
          if (res.data == 1) {
            alert('Registeration SuccessFull!!');
            this.componentDidMount();
          } else {
            alert('Section is Full!!');
          }
        })
    }

    const listItems = this.state.courses.map((item) => (
      <tr>
        <td width="150px">{item.courseCode}</td>
        <td width="250px">{item.name}</td>
        <td ALIGN="center" width="115px">
          <select onChange={this.handleChange} >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </td>
        <td ><button class="button" onClick={()=>this.setState({courseId:item.id},()=>handleClick())}>Register!</button></td>
      </tr>
    ))
    return (
      <>
      {this.state.regBool?
      <div>
        <div class="first">
          <div class="second">
            <h3 style={{ color: 'black' }}> Course Registration </h3>
          </div>
          <div>
            <div class="tbl-header">
              <table id="example" cellpadding="0" cellspacing="0" border="0">
                <thead><tr><td class="text" width="150px">Course Code</td><td class="text" width="250px">Course Name</td><td class="text" width="115px">Section</td><td class="text" width="150px">Register</td></tr></thead>
              </table>
            </div>
            <div class="tbl-content">
              <table id="example" cellpadding="0" cellspacing="0" border="0">
                <tbody>
                  {listItems}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      : <h1>Registration Close</h1>}
      </>
    )
  }
}

const Registration = MotionHoc(RegistrationComponent);

export default Registration;