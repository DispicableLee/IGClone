import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "../../Home";
import { ColorLensOutlined } from "@mui/icons-material";

export default function NewUser() {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
  });

  function handleChange(e) {
    const value = e.target.value;
    const keyName = e.target.name;
    setNewUser({ ...newUser, [keyName]: value });
  }
  console.log(newUser);

  function handleSubmit(e) {
    e.preventDefault();
    const newObj = {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      username: newUser.username,
    };
    fetch("http://localhost:9292/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj)
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Full Name</label>
      <input
        name="name"
        value={newUser.name}
        type="text"
        placeholder="Enter Full Name"
        onChange={handleChange}
      />
      <label>Username</label>
      <input
        name="username"
        value={newUser.username}
        type="text"
        placeholder="Enter Username"
        onChange={handleChange}
      />
      <label>Email</label>
      <input
        name="email"
        value={newUser.email}
        type="text"
        placeholder="Enter Email"
        onChange={handleChange}
      />
      <label>Password</label>
      <input
        name="password"
        value={newUser.password}
        type="password"
        placeholder="Enter Password"
        onChange={handleChange}
      />
      <button type="submit">Create Account</button>
    </form>
  );
}
