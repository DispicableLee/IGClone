import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
//=========================== components ================================
import CommentsList from "./CommentsList";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
//====================================================================================================
export default function Post({
  postId,
  description,
  likes,
  is_liked,
  image_url,
  date_posted,
  user_posted_username,
  created_at,
  updated_at,
  comments,
  user,
}) {
  const [comment, setComment] = useState("");
  const [expanded, setExpanded] = React.useState(false);
  const [commentList, setCommentList] = useState(comments);
  console.log("user", user.id);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function addComment(e) {
    e.preventDefault();
    const newObj = {
      comment: comment,
      user_id: user.id,
      post_id: postId,
    };
    console.log(postId);
    fetch(`/posts/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    })
      .then((r) => r.json())
      .then((data) => {
        const newArray = [...comments, data];
        setCommentList(newArray);
      });
  }

  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{
        display: "inline-block",
        margin: 10,
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={user_posted_username}
        subheader={date_posted}
      />
      <Typography>{user_posted_username}</Typography>
      <CardMedia
        component="img"
        height="194"
        image={image_url}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
          {likes.length}
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <CommentsList comments={commentList} poster={user_posted_username} />
          <form>
            <input
              type="text"
              onChange={(e) => setComment(e.target.value)}
              placeholder="Type Your Comment"
            />
            <button onClick={(e) => addComment(e)}> Add comment</button>
          </form>
        </CardContent>
      </Collapse>
    </Card>
  );
}
