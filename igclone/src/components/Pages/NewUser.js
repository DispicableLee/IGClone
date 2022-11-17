import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NewUser() {
  let navigate = useNavigate()
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
      .then((data) =>  {
        if(data.user.name.split("").length>0){
          navigate("/")
        }else{
          navigate("/newUser")
        }
      });
  }

  return (
    <div>
    <h1>Sign up</h1>
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
    </div>

  );
}
