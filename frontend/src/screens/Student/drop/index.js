import React, { Component } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';

import MotionHoc from '../MotionHoc';
import './style.css'
import UserProfile from '../../../Session';

class DropComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userId : Cookies.get("userId"),
      courses: [],
      registerId: 0,
      regBool: 0,
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:8080/api/registeredCourses/getRegisteredCourse/${this.state.userId}`)
      .then((res) => {
        this.setState({ courses: res.data });
        console.log(this.state.courses);
      })
    axios.get(`http://localhost:8080/api/department/getRegBool/${this.state.userId}`)
      .then((res) => {
        this.setState({ regBool: res.data });
        console.log(res.data);
      })
  }
  render() {
    const listItems = this.state.courses.map((item) => (
      <tr>
        <td width="150px">{item.courseCode}</td>
        <td width="250px">{item.name}</td>
        <td ALIGN="center" width="115px">{item.section_name}</td>
        <td ><button class="button" onClick={() => this.setState({ registerId: item.registrationId }, () => handleClick())}>Drop!</button></td>
      </tr>
    ))
    const handleClick = () => {
      axios.get(`http://localhost:8080/api/register/updateSection/${this.state.registerId}`)
        .then(() => {
          axios.delete(`http://localhost:8080/api/register/${this.state.registerId}`)
            .then(() => {
              this.componentDidMount();
            })
        })

    }
    return (
      <>
        {this.state.regBool ?
          <div>
            <div class="first">
              <div class="second">
                <h3 style={{ color: 'black' }}> Registered Courses! </h3>
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
          : <h1>Withdraw Close</h1>}
      </>
    )
  }
}

const Drop = MotionHoc(DropComponent);

export default Drop;