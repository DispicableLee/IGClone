import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { isRouteErrorResponse } from 'react-router-dom';

export default function FormDialog(loggedInUser) {
//==================== setting states ===================================
  const profileUser = loggedInUser.loggedInUser
  console.log(profileUser.posts)
  const [description, setDescription] = useState("")
  const [iUrl, setIUrl] = useState("")

  const [open, setOpen] = React.useState(false);

//=============== handle post submittion =============================
    function submitPost(e){
        console.log(profileUser.id)
        e.preventDefault()
        const newObj = {
            description: description,
            image_url: iUrl
          }
        fetch(`http://localhost:9292/users/${profileUser.id}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObj)
        })
        .then((res)=>res.json())
        .then((json)=>console.log(json))
    }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        New Post
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            fullWidth
            variant="standard"
            onChange={(e)=>setDescription(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Image Url"
            fullWidth
            variant="standard"
            onChange={(e)=>setIUrl(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={submitPost}>Post Your Post!</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}