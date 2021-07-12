import React, { Component } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';

import MotionHoc from '../MotionHoc';
import UserProfile from '../../../Session';

import './style.css'

class AddAttendanceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:0,
            date: '',
            lecNo: 0,
            value: '',
            status: '',
            registrationID: 0,
            students: [],
            userId:Cookies.get("userId"),
        };
    }
    render() {
        const submit = () => {
            axios.post("http://localhost:8080/api/attendance/", {
                lecNo: this.state.lecNo,
                status: this.state.status,
                registrationID: this.state.registrationID,
                date: this.state.date,
            })
        }
        const listItems = this.state.students.map((item) => (
            <tr>
                <td width="150px">{item.rollNo}</td>
                <td width="250px">{item.name}</td>
                <td width="115px">{this.state.date}</td>
                <td ALIGN="center" width="150px">
                    <select onChange={(e) => this.setState({ status: e.target.value ,registrationID:item.registrationid},()=>submit())}>
                        <option value="-">-</option>
                        <option value="P">P</option>
                        <option value="A">A</option>
                    </select>
                </td>
            </tr>
        ))
        const handleClick = () => {
            axios.get(`http://localhost:8080/api/addAttendance/getRegisteredStudents/${this.state.value}/${this.state.userId}`)
                .then((res) => {
                    this.setState({ students: res.data });
                    console.log(this.state.students);
                })
        }
        return (
            <>
                <div className="lec">
                    <div style={{ textAlign: 'center', alignSelf: 'center' }} onChange={(e) => this.setState({ value: e.target.value }, () => handleClick())} value={this.state.value}>
                        <select className="options">
                            <option value="-">-</option>
                            <option value="A">Section A</option>
                            <option value="B">Section B</option>
                            <option value="C">Section C</option>
                            <option value="D">Section D</option>
                        </select>
                    </div>
                    <input type="date" name="birthday" className="datestyle" required onChange={(e) => this.setState({ date: e.target.value })} />
                    <div>
                        <h4>Lecture No</h4>
                        <input value={this.state.lecNo} onChange={(e) => this.setState({ lecNo: e.target.value })} type="number" required />
                    </div>
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


            </>
        )
    }
}

const AddAttendance = MotionHoc(AddAttendanceComponent);

export default AddAttendance;