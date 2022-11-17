import React from "react";
import UserCard from "../UserCard";
import { useState, useEffect } from "react";
import ProfilePost from "./ProfilePost";

export default function Profile() {
  const [loggedUserPosts, setLoggedUserPosts] = useState([]);
  const [logUser, setLogUser] = useState({
    password: "",
    username: "",
  });

  function handleChange(e) {
    const value = e.target.value;
    const keyName = e.target.name;
    setLogUser({ ...logUser, [keyName]: value });
  }
  console.log(logUser);

  function handleSubmit(e) {
    e.preventDefault();
    const newLog = {
      password: logUser.password,
      username: logUser.username,
    };
    fetch("http://localhost:9292/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLog),
    })
      .then((r) => r.json())
      .then((data) => {
        return setLoggedUserPosts(data.user.posts.map(post => {
          return <ProfilePost key={post.id} post={post} user={data.user}/>;
        }))});
  }

  // const postList = loggedUser.user.posts.map(post => {
  //   return <ProfilePost key={post.id} post={post} />;
  // })


  function handleLogout() {
    fetch("http://localhost:9292/logout")
      .then((r) => r.json())
      .then((data) => setLoggedUserPosts(data));
  }
  return (
    <div>
      <div>
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            name="username"
            value={logUser.username}
            type="text"
            placeholder="Enter Username"
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            name="password"
            value={logUser.password}
            type="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />
          <button type="submit">Sign in</button>
        </form>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div>
        <h1>Posts</h1>
        <ul>
     {loggedUserPosts}
        </ul>
      </div>
    </div>
  );
}
