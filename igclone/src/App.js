import * as React from "react";
//================================ mui ====================================================
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

//================================= components ============================================
import NewUser from "../src/components/Pages/NewUser";
import Profile from "../src/components/Pages/Profile";
import Home from "./Home";
import { useEffect } from "react";
export default function App() {
  //================================ setting up login =====================================

  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("/profile")
      .then((response) => response.json())
      .then((data) => {
        console.log("profile", data);
      });
  }, []);
  const getUser = async () => {
    const req = await fetch("/profile");
    const res = await req.json();
    setUser(res.user);
    console.log(res);
  };

  React.useEffect(() => {
    getUser();
  }, []);

  //========== return ============
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ marginBottom: 10 }}>
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <ul
              style={{
                display: "inline-block",
                listStyleType: "none",
                fontWeight: "bold",
              }}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/newUser">New User</Link>
              </li>
            </ul>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newUser" element={<NewUser />} />
      </Routes>
    </div>
  );
}
