import ProfilePostComment from "./ProfilePostComment"

export default function ProfilePost({post, user}) {



    return (
        <div>
            <li>
                <h4>{user.name}</h4>
                <img src={post.image_url}  width={500} height={500} alt="image"/>
                <h4>{post.description}</h4>
                <p>Likes {post.likes}</p>
                <ul>
                   {post.comments.map(comment => <ProfilePostComment key={comment.id} comment={comment}/>)}
                </ul>
            </li>
        </div>
    )
}