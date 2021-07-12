import React, { Component } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';

import UserProfile from '../../../Session';
import MotionHoc from '../MotionHoc';
import './style.css'

class WithdrawComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      registerId: 0,
      withDrawBool:0,
      userId : Cookies.get("userId"),
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:8080/api/registeredCourses/getRegisteredCourse/${this.state.userId}`)
      .then((res) => {
        this.setState({ courses: res.data });
        console.log(this.state.courses);
      })
    axios.get(`http://localhost:8080/api/department/getWithdrawBool/${this.state.userId}`)
      .then((res) => {
        this.setState({ withDrawBool: res.data });
        console.log(res.data);
      })
  }
  render() {
    const handleclick = () => {
      console.log(this.state.registerId)
      axios.get(`http://localhost:8080/api/register/updateSection/${this.state.registerId}`)
        .then(() => {
          axios.get(`http://localhost:8080/api/register/update/${this.state.registerId}`)
            .then((res) => {
              this.componentDidMount();
            })
        })

    }
    return (
      <>
        {this.state.withDrawBool ?
          <div>
            <div class="first">
              <div class="second">
                <h3 style={{ color: 'black' }}> Registered Courses! </h3>
              </div>
              <div>
                <div class="tbl-header">
                  <table id="example" cellpadding="0" cellspacing="0" border="0">
                    <thead><tr><td class="text" width="150px">Course Code</td><td class="text" width="250px">Course Name</td><td class="text" width="115px">Section</td><td class="text" width="150px">Status</td></tr></thead>
                  </table>
                </div>
                <div class="tbl-content">
                  <table id="example" cellpadding="0" cellspacing="0" border="0">
                    <tbody>

                      {this.state.courses.map((item) => (
                        <tr>
                          <td width="150px">{item.courseCode}</td>
                          <td width="250px">{item.name}</td>
                          <td ALIGN="center" width="115px">{item.section_name}</td>
                          <td ><button class="button2" onClick={() => this.setState({ registerId: item.registrationId }, () => handleclick())}>With Draw!</button></td>
                        </tr>
                      ))}


                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          : <h1>Withdraw Period Close</h1>}
      </>
    )
  }
}


const Withdraw = MotionHoc(WithdrawComponent);

export default Withdraw;