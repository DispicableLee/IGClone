import React from "react";
import Typography from '@mui/material/Typography';


export default function Comments(props){
    return (
        <div>
            <h1>{props.username}</h1>
            <Typography>{props.content}</Typography>
            <Typography>{props.likes.length}</Typography>
        </div>
    )
}