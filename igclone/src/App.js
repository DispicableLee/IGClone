
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//================================ mui ====================================================
//================================= components ============================================
import PostList from './components/PostList';
import Header from './components/Header'
//================================ useState/useEffect =====================================
import { useState, useEffect } from 'react';
function App() {
  const [userList, setUserList] = useState([])
//========================== initial fetch ================================================
  useEffect(()=>{
    fetch("http://localhost:3000/users")
    .then((res)=>res.json())
    .then((json)=>{
        setUserList(json)
    })
  },[])
//============= setting posts from json ===================================
  const userPosts = userList.map((user)=>{
    return user.posts
  })


  return (
    <div className="App">
      <Header/>
      <PostList userPosts={userPosts}/>

    </div>
  );
}

export default App;
