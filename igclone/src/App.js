import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//=========================================================================================
//================================= components ============================================
import Post from './components/Post'

function App() {
  return (
    <div className="App">
{/*================================== nav bar ============================================*/}
      <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static"
        style={{marginBottom: "30px"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Profile
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
{/* ========================================postlist============================================== */}

      <Post/>

    </div>
  );
}

export default App;
