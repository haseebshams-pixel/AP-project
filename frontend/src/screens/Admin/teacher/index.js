import React, { Component } from 'react'
import axios from 'axios';

import './style.css';
import MotionHoc from '../MotionHoc';

class TeacherComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teacher: [
                {
                    salary: 1,
                    dateJoined: 2018,
                }
            ],
            user: [
                {
                    email: 'sarim.baig@nu.edu.pk',
                    name: 'Haseeb',
                    cnic: '123131',
                    mobileno: '5464654'
                }
            ],
            users: [],
            teachers: [],
        };
    }
    componentDidMount() {
        axios.get(`http://localhost:8080/api/user/teachers`)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    users: res.data,
                })
            })
        axios.get(`http://localhost:8080/api/teacher/`)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    teachers: res.data,
                })
            })
    }
    render() {
        const listItems = this.state.teachers.map((item, index) => {
            const userContent = this.state.users[index];
            return(
                <tr>
                    <td width="100px">{userContent.email}</td>
                    <td width="100px">{userContent.name}</td>
                    <td width="170px">{userContent.cnic}</td>
                    <td width="100px">{userContent.mobileno}</td>
                    <td width="100px">{item.salary}</td>
                    <td width="100px">{item.dateJoined}</td>
                </tr>
            );
        })
        return (
            <>
                <div class="first">
                    <div class="second">
                        <h3 style={{ color: 'black' }}> Teachers </h3>
                    </div>
                    <div>
                        <div class="table-header">
                            <table id="example" cellpadding="0" cellspacing="0" border="0">
                                <thead><tr><td class="text" width="250px">Email</td><td class="text" width="100px">Name</td><td class="text" width="170px">CNIC</td><td class="text" width="100px">PhoneNumber</td><td class="text" width="100px">Salary</td><td class="text" width="100px">Degree</td></tr></thead>
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

const Teacher = MotionHoc(TeacherComponent);

export default Teacher;
