import React, { Component } from 'react'
import axios from 'axios';
import _, { map } from 'underscore';


import './style.css';
import MotionHoc from '../MotionHoc';
import UserProfile from '../../../Session';

class StudentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student: [
                {
                    rollNo: 1,
                    batch: 2018,
                    program: 'Cs'
                },
                {
                    rollNo: 1,
                    batch: 2018,
                    program: 'Cs'
                },
                {
                    rollNo: 1,
                    batch: 2018,
                    program: 'Cs'
                }
            ],
            user: [
                {
                    name: 'Haseeb',
                    cnic: '123131',
                    mobileno: '5464654'
                },
                {
                    name: 'Haseeb',
                    cnic: '123131',
                    mobileno: '5464654'
                },
                {
                    name: 'Haseeb',
                    cnic: '123131',
                    mobileno: '5464654'
                }
            ],
            users: [],
            students: [],
        };
    }
    componentDidMount() {
        axios.get(`http://localhost:8080/api/user/students`)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    users: res.data,
                })
            })
        axios.get(`http://localhost:8080/api/student/`)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    students: res.data,
                })
            })
    }
    render() {
        const listItems = this.state.students.map((item, index) => {
            const userContent = this.state.users[index];
            return (
                <tr>
                    <td width="100px">{item.rollNo}</td>
                    <td width="100px">{userContent.name}</td>
                    <td width="170px">{userContent.cnic}</td>
                    <td width="100px">{userContent.mobileno}</td>
                    <td width="100px">{item.batch}</td>
                    <td width="100px">{item.program}</td>
                </tr>
            );
        });
        
        return (
            <>
                <div class="first">
                    <div class="second">
                        <h3 style={{ color: 'black' }}> Students </h3>
                    </div>
                    <div>
                        <div class="table-header">
                            <table id="example" cellpadding="0" cellspacing="0" border="0">
                                <thead><tr><td class="text" width="100px">Roll Number</td><td class="text" width="100px">Name</td><td class="text" width="170px">CNIC</td><td class="text" width="100px">PhoneNumber</td><td class="text" width="100px">Batch</td><td class="text" width="100px">Degree</td></tr></thead>
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

const Student = MotionHoc(StudentComponent);

export default Student;
