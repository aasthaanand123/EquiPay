import React from "react";
import Inputoptions from "./InputOptions";
import { Avatar } from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import "../styles/post.css";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
function Post({ name, role, message }) {
  return (
    <div className="postMessage">
      <div className="postHeader">
        <Avatar sx={{ width: 60, height: 60 }} />
        <div className="postInfo">
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>
      <div className="postBody">
        <p>{message}</p>
      </div>
      <hr style={{ color: "gray" }} />
      <div className="postButtons">
        <Inputoptions Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <Inputoptions Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <Inputoptions Icon={ShareOutlinedIcon} title="Share" color="gray" />
      </div>
    </div>
  );
}

export default Post;
