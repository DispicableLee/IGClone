import React from "react";
import Post from './Post'

export default function UserPosts(userPosts){
    const userPostsList = userPosts.userPosts
    const renderedPosts = userPostsList.map((p)=>{
       return p.map((postInfo)=>{
            return (
                <Post
                    key={postInfo.id}
                    postId={postInfo.id}
                    description={postInfo.description}
                    likes={postInfo.likes}
                    is_liked={postInfo.is_liked}
                    image_url={postInfo.image_url}
                    date_posted={postInfo.date_posted}
                    user_posted_username={postInfo.user_posted_username}
                    created_at={postInfo.created_at}
                    updated_at={postInfo.updated_at}
                    comments={postInfo.comments}

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