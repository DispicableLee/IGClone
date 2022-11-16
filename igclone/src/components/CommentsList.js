import React from "react";
import Comments from "./Comments";

export default function CommentsList(comments){
    const commentList = comments.comments
    const renderedComments = commentList.map((comment)=>{
        return (
            <Comments
                key={comment.id}
                id={comment.id}
                comment={comment.comment}
                created_at={comment.created_at}
                post_id={comment.post_id}
                updated_at={comment.updated_at}
                user_id={comment.user_id}
                username={comment.commented_user.username}
            />
        )
    })
    return (
        <div>
            {renderedComments}
        </div>
    )
}