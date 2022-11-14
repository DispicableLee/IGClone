import React from "react";
import Post from './Post'

export default function PostList(userPosts){
    const userPostList = userPosts.userPosts
    console.log(userPostList)
    const renderedPosts = userPostList.map((p)=>{
       return p.map((postInfo)=>{
            console.log(postInfo.postComments)
            return (
                <Post
                    key={postInfo.postId}
                    pId={postInfo.posterId}
                    title={postInfo.postTitle}
                    content={postInfo.postContent}
                    image={postInfo.postImage}
                    likes={postInfo.postLikes}
                    comments={postInfo.postComments}
                />
            )
        })
    })
    return (
        <div>
            {renderedPosts}
        </div>
    )
}