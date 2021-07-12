import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";

import Sidebar from "../sideBar";
import Home from "../home"
import AddAttendence from "../addAttendence";
import AddMarks from "../addMarks";
import Maintenance from "../maintenance";
import UserProfile from '../../../Session';


const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(137, 171, 245, 0.37);
`;

function Main() {
  const location = useLocation();
  const [loggedin, setLoggedin] = useState(Cookies.get("loggedin"));
  const [type, setType] = useState(Cookies.get("type"));
  if (loggedin && type === "teacher") {
    return (
      <>
        <Sidebar />
        <Pages>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/teachhome" component={Home} />
              <Route path="/teachhome/addattendance" component={AddAttendence} />
              <Route path="/teachhome/addmarks" component={AddMarks} />
              <Route path="/teachhome/maintenance" component={Maintenance} />
            </Switch>
          </AnimatePresence>
        </Pages>
      </>
    );
  } else {
    return (
      <h1>ERROR PAGE NOT FOUND</h1>
    )
  }
}

export default Main;