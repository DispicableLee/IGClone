import * as React from "react";
//================================ mui ====================================================
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
//================================= components ============================================
import Profile from "../src/components/Pages/Profile";
import Home from "./Home";
export default function App() {
  //================================ setting up login =====================================
  const [userLogin, setUserLogin] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    findCurrentUser(userLogin);
  };
  const handleChange = (e) => {
    setUserLogin(e.target.value);
  };

  const changeUser = (user) => {
    setCurrentUser(user);
  };
  function findCurrentUser(username) {
    const response = fetch(`http://localhost:9292/users/${username}`);
    const user = response.json();
    changeUser(user);
    console.log(user);
  }

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
            </ul>
          </Toolbar>
          <form
            onSubmit={handleSubmit}
            style={{
              float: "right",
            }}
          >
            <label htmlFor="login" value="Username">
              Username:{" "}
            </label>
            <br />
            <input
              type="text"
              name="login"
              value={userLogin}
              onChange={handleChange}
              autoFocus={true}
            />
            <input type="submit" value="Login" />
          </form>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
