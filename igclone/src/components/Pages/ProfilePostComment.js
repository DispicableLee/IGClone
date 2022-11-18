
export default function ProfilePostComment({comment}) {
    console.log(comment.id)
    
    function deleteComment(){
        fetch( `/comments/${comment.id}`, {
            method: "DELETE",
        })}

    return (
        <div>
            <li>
                <h4>{comment.commented_user.name}</h4>
                <p>{comment.comment}</p>
                <p>{comment.likes}</p>
            </li>
            <button onClick={deleteComment}>delete</button>
   

        </div>
    )
}