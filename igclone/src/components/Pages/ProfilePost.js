import ProfilePostComment from "./ProfilePostComment"
import Comments from "../Comments"


export default function ProfilePost({post, user}) {



    return (
        <div>
                <img src={user.image_url}  width={50} height={50} alt="image"/>
                <h4>{user.name}</h4>
                <img src={post.image_url}  width={500} height={500} alt="image"/>
                <h4>{post.description}</h4>
                <p>Likes {post.likes}</p>
                <ul>
                   {post.comments.map(comment => <ProfilePostComment key={comment.id} comment={comment}/>)}
                </ul>
            <Comments />
        </div>
    )
}