import React,{useState} from "react";
import { Route, Switch, useLocation } from "react-router";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";

import Sidebar from "../sidebar";
import Home from "../home"
import Registration from "../registration";
import Attendance from "../attendance";
import Marks from "../marks";
import Transcript from "../transcript";
import Drop from "../drop";
import Withdraw from "../withdraw";
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
  if(loggedin && type ==="student")
  return (
        <>
          <Sidebar />
          <Pages>
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/studhome" component={Home} />
                <Route path="/studhome/registration" component={Registration} />
                <Route path="/studhome/attendance" component={Attendance} />
                <Route path="/studhome/marks" component={Marks} />
                <Route path="/studhome/transcript" component={Transcript} />
                <Route path="/studhome/drop" component={Drop} />
                <Route path="/studhome/withdraw" component={Withdraw} />
                <Route path="/studhome/maintenance" component={Maintenance} />
              </Switch>
            </AnimatePresence>
          </Pages>
        </>
  );
  else {
    return (
      <h1>ERROR PAGE NOT FOUND</h1>
    )
  }
}

export default Main;