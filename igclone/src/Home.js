import * as React from "react";
//================================ mui ====================================================

//================================= components ============================================
import PostList from "./components/PostList";
import Profile from "./components/Pages/Profile";
//================================ useState/useEffect =====================================
import { useState, useEffect } from "react";





export default function Home() {
  const [userList, setUserList] = useState([]);
  //========================== initial fetch ================================================
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
  console.log(userPosts);
  return (
    <div className="App">
      {/* ========================================= header w/routes =================================== */}
      <PostList userPosts={userPosts} />
    </div>
  );
}
