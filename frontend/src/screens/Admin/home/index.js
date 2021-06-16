import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

import './style.css';
import MotionHoc from '../MotionHoc';

function HomeComponent() {
    return (
        <>
            <div className="adStart">
                <h1>DashBoard</h1>
            </div>
            <div className="adContentr">
                <div className="pair">
                    <button className="modalbtn" data-toggle="modal" data-target="#myModal">Set Registration Timeline</button>
                    <button className="modalbtn">Close Registration</button>
                </div>
                <div className="pair">
                    <button className="modalbtn">Set WithDrawal Timeline</button>
                    <button className="modalbtn">Close WithDrawal</button>
                </div>
                <div className="pair">
                    <button className="modalbtn">Generate Transcript</button>
                    <button className="modalbtn">Start New Semester</button>
                </div>
            </div>

        </>
    );
};

const Home = MotionHoc(HomeComponent);

export default Home;
