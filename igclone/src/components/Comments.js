import React from "react";
import { useState } from "react";

import Typography from '@mui/material/Typography';


export default function Comments(props){
  

    return (
        <div>
            <Typography>{props.username}</Typography>
            <Typography>{props.comment}</Typography>
            {/* <form>
          <input
            type="text"
            onChange={(e)=>setComment(e.target.value)}
            placeholder="Type Your Comment"
          />
          <button onClick={addComment}> Add comment</button>
      </form> */}
            
        
        </div>
    )
}