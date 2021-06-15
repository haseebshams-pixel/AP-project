import MotionHoc from '../MotionHoc';
import React, { Component } from 'react'


import './style.css'

class DropComponent extends Component {

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
        <td ALIGN="center" width="115px">A</td>
        <td ><button class="button">Drop!</button></td>
      </tr>
    ))
    return (
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
    )
  }
}

const Drop = MotionHoc(DropComponent);

export default Drop;