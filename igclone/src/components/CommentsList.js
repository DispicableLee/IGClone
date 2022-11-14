import React from "react";
import Comments from "./Comments";

export default function CommentsList(comments){
    const commentList = comments.comments
    console.log(commentList)
    const renderedComments = commentList.map((comment)=>{
        return (
            <Comments
                username={comment.commentUsername}
                content={comment.commentContent}
                likes={comment.commentLikes}
            />
        )
    })
    return (
        <div>
            {renderedComments}
        </div>
    )
}