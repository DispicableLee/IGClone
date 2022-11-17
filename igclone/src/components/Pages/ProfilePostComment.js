export default function ProfilePostComment({comment}) {



    return (
        <div>
            <li>
                <h4>{comment.commented_user.name}</h4>
                <p>{comment.comment}</p>
                <p>{comment.likes}</p>
            </li>
        </div>
    )
}