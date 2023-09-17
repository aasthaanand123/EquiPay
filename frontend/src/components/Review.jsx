import React from "react";
import Inputoptions from "./InputOptions";
import { Avatar } from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import "../styles/review.css";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
function Review({ name, role, message }) {
  return (
    <div className="reviewMessage">
      <div className="reviewHeader">
        <Avatar sx={{ width: 60, height: 60 }} />
        <div className="reviewInfo">
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>
      <div className="reviewBody">
        <p>{message}</p>
      </div>
      <hr style={{ color: "gray" }} />
      <div className="reviewButtons">
        <Inputoptions Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <Inputoptions Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <Inputoptions Icon={ShareOutlinedIcon} title="Share" color="gray" />
      </div>
    </div>
  );
}

export default Review;
