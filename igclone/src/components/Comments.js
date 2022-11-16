import React from "react";
import Typography from '@mui/material/Typography';


export default function Comments(props){
    return (
        <div>
            <Typography>{props.username}</Typography>
            <Typography>{props.comment}</Typography>
        
        </div>
    )
}