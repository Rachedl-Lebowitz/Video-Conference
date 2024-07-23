import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, NavBar } from "./components";
import { fetchUsers } from "./services/users/userService";
import { useAppDispatch, useAppSelector } from "./services/hooks";
import { Box } from "@mui/material";
import { navItems } from "./utils/constants";
import { fetchSessionDetails } from "./services/session/sessionService";

const App = () => {
  const dispatch = useAppDispatch();
  const notification = useAppSelector(
    (state: any) => state.common.successMessage
  );

  const getUsers = () => {
    dispatch(fetchUsers());
  };

  const getSession = () => {
    dispatch(fetchSessionDetails());
  };

  useEffect(() => {
    getUsers();
    getSession();

    // refreshing the users if connected to server
    // const interval = setInterval(() => {
    //   getUsers();
    // }, 2000);
    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  return (
    <Router>
      <Box className="root-container">
        <Header />
        <Box className="video-conference-app">
          <NavBar />
          <Box className="video-conference-layout-wrapper">
            <Routes>
              {navItems.map((route) => (
                <Route path={route.path} Component={route.component} />
              ))}
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
