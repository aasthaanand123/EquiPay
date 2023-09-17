import React, { useState } from "react";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Post from "./Post";
import "../styles/forum.css";

function Forum() {
  const [posts, setPosts] = useState([]);
  const sendPost = (e) => e.preventDefault();
  return (
    <div className="postbox">
      <div className="posts">
        <div className="postContainer">
          <div className="post">
            <FontAwesomeIcon icon={faPenToSquare} />
            <form>
              <input type="text" placeholder="Create a Post"></input>
              <button type="submit" onClick={sendPost}>
                Send
              </button>
            </form>
          </div>
        </div>
        {posts.map((post) => (
          <Post
            name="Mathilda Foster"
            role="UX Designer"
            message="lorem ipsum dolor"
          />
        ))}
        <Post
          name="Mathilda Foster"
          role="UX Designer"
          message="lorem ipsum dolor"
        />
        <Post
          name="Mathilda Foster"
          role="UX Designer"
          message="lorem ipsum dolor"
        />
      </div>
    </div>
  );
}

export default Forum;
