import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "../../Home"

export default function NewUser() {
  let navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(){
    navigate("/")
  }
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-username"
        label="First/Last Name"
        variant="standard"
      />
      <TextField id="standard-username" label="Username" variant="standard" />
      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
      />
      <TextField
        id="standard-read-only-input"
        label="E-Mail"
        variant="standard"
      />
      <Button 
        variant="contained"
        onClick={handleSubmit}
        >Create Account!</Button>

    </Box>
  );
}
