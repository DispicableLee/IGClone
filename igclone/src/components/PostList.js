import React from "react";
import Post from './Post'

export default function PostList(userPosts){
    const userPostList = userPosts.userPosts
    const renderedPosts = userPostList.map((p)=>{
       return p.map((postInfo)=>{
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