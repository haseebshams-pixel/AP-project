import React, { Component } from 'react'

import './style.css';
import MotionHoc from '../MotionHoc';

class TeacherComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                {
                    id: 1,
                    email: 'sarim.baig@nu.edu.pk',
                    name: 'Sarim Baig',
                    salary:100000,
                    degree:'BS(CS)',
                    cnic:'36501-6349484-7',
                    phonenumber:'0307-7044820',
                },
                {
                    id: 2,
                    email: 'noshaba.nasir@nu.edu.pk',
                    name: 'Noshaba Nasir',
                    salary:100000,
                    degree:'BS(CS)',
                    cnic:'36501-6349484-7',
                    phonenumber:'0307-7044820',
                },
                {
                    id: 3,
                    email: 'mubashir.qayyum@nu.edu.pk',
                    name: 'Mubashir Qayyum',
                    salary:100000,
                    degree:'BS(CS)',
                    cnic:'36501-6349484-7',
                    phonenumber:'0307-7044820',
                },
                {
                    id: 4,
                    email: 'amir.ali@nu.edu.pk',
                    name: 'Amir Ali',
                    salary:100000,
                    degree:'BS(CS)',
                    cnic:'36501-6349484-7',
                    phonenumber:'0307-7044820',
                },
                {
                    id: 5,
                    email: 'mubashir.baig@nu.edu.pk',
                    name: 'Mubashir Baig',
                    salary:100000,
                    degree:'BS(CS)',
                    cnic:'36501-6349484-7',
                    phonenumber:'0307-7044820',
                },
                {
                    id: 6,
                    email: 'marium@nu.edu.pk',
                    name: 'Marium Khalid',
                    salary:100000,
                    degree:'BS(CS)',
                    cnic:'36501-6349484-7',
                    phonenumber:'0307-7044820',
                },
            ]
        };
    }
    render() {
        const listItems = this.state.students.map((item) => (
            <tr>
                <td width="100px">{item.email}</td>
                <td width="100px">{item.name}</td>
                <td width="170px">{item.cnic}</td>
                <td width="100px">{item.phonenumber}</td>
                <td width="100px">{item.salary}</td>
                <td width="100px">{item.degree}</td>
            </tr>
        ))
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
                <div className="btnCont">
                    <button className="btnddd"><h2>Add Teacher</h2></button>
                </div>

            </>
        )
    }
}

const Teacher = MotionHoc(TeacherComponent);

export default Teacher;
