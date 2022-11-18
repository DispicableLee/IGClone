
export default function ProfilePostComment({comment}) {
    console.log(comment.id)
    console.log(comment.commented_username)
    
    function deleteComment(){
        fetch( `/comments/${comment.id}`, {
            method: "DELETE",
        })}

    return (
        <div>
            <li>
                <h4>{comment.commented_username}</h4>
                <p>{comment.comment}</p>
                <p>{comment.likes}</p>
            </li>
            <button onClick={deleteComment}>delete</button>
   

        </div>
    )
}