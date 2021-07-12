import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

//All the svg files
import Home from "../assets/home-solid.svg";
import Mark from "../assets/marks.svg";
import Attendance from "../assets/attendance.svg";
import Update from "../assets/update.svg";
import PowerOff from "../assets/power-off-solid.svg";
import UserProfile from '../../../Session';

const Container = styled.div`
  position: fixed;
  .active {
    border-right: 4px solid White;
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Button = styled.button`
  background-color: #29bf8c;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: Black;
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: #29bf8c;
  width: 3.5rem;
  height: 45vh;
  margin-top: 1rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Logo = styled.div`
  width: 2rem;
  img {
    width: 100%;
    height: auto;
  }
`;

const SlickBar = styled.ul`
  color: Black;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #29bf8c;
  padding: 0rem 0;
  position: absolute;
  top: 0rem;
  left: 0;
  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: White;
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 1rem;
  &:hover {
    border-right: 4px solid White;
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
  img {
    width: 1.2rem;
    height: auto;
    
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "auto" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const Profile = styled.div`
  width: ${(props) => (props.clicked ? "14rem" : "3rem")};
  height: 3rem;
  padding: 0.5rem 1rem;
  /* border: 2px solid Black; */
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? "9rem" : "0")};
  background-color: #29bf8c;
  color: white;
  transition: all 0.3s ease;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      border: 2px solid Grey;
      padding: 2px;
    }
  }
`;

const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    display: inline-block;
  }
  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: White;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Logout = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  img {
    width: 100%;
    height: auto;
    filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
      brightness(100%) contrast(126%);
    transition: all 0.3s ease;
    &:hover {
      border: none;
      padding: 0;
      opacity: 0.5;
    }
  }
`;

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [profileClick, setprofileClick] = useState(false);
  const handleProfileClick = () => setprofileClick(!profileClick);
  
  const history = useHistory();
  function authenticate () {
    axios.get(`http://localhost:8080/api/user/logout`,{withCredentials: true})
    .then((res)=>{
        console.log(res);
        if(res.data!=-1){
            history.push("/");
        }
    })
}
  return (
    <Container>
      <Button clicked={click} onClick={() => handleClick()}>
        <text style={{ color: "#29bf8c" }}>Click</text>
      </Button>
      <SidebarContainer>
      <Logo>
          <img src={Home} alt="logo" />
      </Logo>
      
        <SlickBar clicked={click}>
          <Item
            onClick={() => setClick(false)}
            exact 
            activeClassName="active"
            to="/teachhome"
          >
            <img src={Home} alt="Home" />
            <Text clicked={click}>Home</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/teachhome/addmarks"
          >
            <img src={Mark} alt="Team" />
            <Text clicked={click}>AddMarks</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            exact
            activeClassName="active"
            to="/teachhome/addattendance"
          >
            <img src={Attendance} alt="Home" />
            <Text clicked={click}>AddAttendence</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            exact
            activeClassName="active"
            to="/teachhome/maintenance"
          >
            <img src={Update} alt="Home" />
            <Text clicked={click}>UpdateProfile</Text>
          </Item>
        </SlickBar>
        <Profile clicked={profileClick}>
          <img
            onClick={() => handleProfileClick()}
            src="https://picsum.photos/200"
            alt="Profile"
          />
          <Details clicked={profileClick}>
            <Name>
              <h4>{UserProfile.getName()}</h4>
            </Name>

            <Logout onClick ={authenticate}>
              <img src={PowerOff} alt="logout" />
            </Logout>
          </Details>
        </Profile>

      </SidebarContainer>
    </Container>
  );
};

export default Sidebar;