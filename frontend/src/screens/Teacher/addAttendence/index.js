import React, { Component } from 'react'

import MotionHoc from '../MotionHoc';
import './style.css'

class AddAttendanceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '18-05-2021',
            students: [
                {
                    id: 1,
                    rollno: '18L-1171',
                    name: 'Haseeb Shams',
                },
                {
                    id: 2,
                    rollno: '18L-1089',
                    name: 'Momin Iqbal',
                },
                {
                    id: 3,
                    rollno: '18L-0939',
                    name: 'Saqlain Haider',
                },
                {
                    id: 4,
                    rollno: '18L-2152',
                    name: 'Faiq Rauf',
                },
                {
                    id: 5,
                    rollno: '18L-1227',
                    name: 'Naveed Ali',
                },
                {
                    id: 6,
                    rollno: '18L-1062',
                    name: 'Hammad Ahmed',
                },
            ]
        };
    }
    render() {
        const listItems = this.state.students.map((item) => (
            <tr>
                <td width="150px">{item.rollno}</td>
                <td width="250px">{item.name}</td>
                <td width="115px">{this.state.date}</td>
                <td ALIGN="center" width="150px">
                    <select>
                        <option value="A">-</option>
                        <option value="B">P</option>
                        <option value="C">A</option>
                    </select>
                </td>
            </tr>
        ))
        return (
            <>
                <div style={{ textAlign: 'center' }}>
                    <select className="options">
                        <option value="A">Section A</option>
                        <option value="B">Section B</option>
                        <option value="C">Section C</option>
                        <option value="D">Section D</option>
                    </select>
                </div>
                <div class="first">
                    <div class="second">
                        <h3 style={{ color: 'black' }}> Add Attendance </h3>
                    </div>
                    <div>
                        <div class="table-header">
                            <table id="example" cellpadding="0" cellspacing="0" border="0">
                                <thead><tr><td class="text" width="150px">Roll Number</td><td class="text" width="250px">Name</td><td class="text" width="115px">Date</td><td class="text" width="150px">Status</td></tr></thead>
                            </table>
                        </div>
                        <div class="table-content">
                            <table id="example" cellpadding="0" cellspacing="0" border="0">
                                <tbody>
                                    {listItems}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="btnCont">
                    <button className="btndd"><h2>Save</h2></button>
                </div>

            </>
        )
    }
}

const AddAttendance = MotionHoc(AddAttendanceComponent);

export default AddAttendance;