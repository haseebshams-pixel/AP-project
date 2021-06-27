import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';
import axios from "axios";
import './style.css';
import MotionHoc from '../MotionHoc';


class HomeComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
          admin:[],
        }
      }
      // componentDidMount(){
      //   axios.get(`http://localhost:8080/api/admin/`)
      //   .then((res)=>{
      //   console.log(res.data)
      //     this.setState({
      //       //admin:res.data,
            
      //     })
      //   })
      // }
    render() {
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
        )
    }
}

const Home = MotionHoc(HomeComponent);

export default Home;
