import * as React from "react";
//================================= components ============================================
import PostList from "./components/PostList";
//================================ useState/useEffect =====================================
import { useState, useEffect } from "react";

export default function Home({ user }) {
  const [userList, setUserList] = useState([]);
  //========================== initial fetch ================================================
  // console.log("HOME", user.id);
  useEffect(() => {
    fetch("http://localhost:9292/data")
      .then((res) => res.json())
      .then((json) => {
        setUserList(json);
      });
  }, []);
  //============= setting posts from json ===================================
  const userPosts = userList.map((user) => {
    return user.posts;
  });
  return (
    <div className="App">
      {/* ========================================= header w/routes =================================== */}
      <PostList user={user} userPosts={userPosts} />
    </div>
  );
}
