import MotionHoc from '../MotionHoc';

import './style.css'


import React, { Component } from 'react'

class RegistrationComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      course: [
        {
          id: 1,
          code: '201',
          name: 'Advance Programming',
        },
        {
          id: 2,
          code: '202',
          name: 'Algorithms',
        },
        {
          id: 3,
          code: '202',
          name: 'Software Design Analysis',
        },
      ]
    };
  }

  render() {
    const listItems = this.state.course.map((item) => (
      <tr>
        <td width="150px">{item.code}</td>
        <td width="250px">{item.name}</td>
        <td ALIGN="center" width="115px">
          <select>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </td>
        <td ><button class="button">Register!</button></td>
      </tr>
    ))
    return (
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
    )
  }
}

const Registration = MotionHoc(RegistrationComponent);

export default Registration;