
import * as React from 'react';
//================================ mui ====================================================
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Routes, Route, Link} from 'react-router-dom'
//================================= components ============================================
import Profile from '../src/components/Pages/Profile'
import Home from './Home'
//================================ useState/useEffect =====================================
import { useState, useEffect } from 'react';
export default function App() {
  const [userList, setUserList] = useState([])
//========================== initial fetch ================================================
  useEffect(()=>{
    fetch("http://localhost:9292/data")
    .then((res)=>res.json())
    .then((json)=>{
        setUserList(json)
    })
  },[])
//============= setting posts from json ===================================
  const userPosts = userList.map((user)=>{
    return user.posts
  })
  console.log(userPosts)
  return (
    <div className="App">
{/* ========================================= header w/routes =================================== */}
<Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static"
        style={{marginBottom: 10}}
            >
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        <ul
          style={{
            display: 'inline',
            listStyleType: "none",
            fontWeight: "bold"
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
      </AppBar>
    </Box>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Routes>

    </div>
  );
}
