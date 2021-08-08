import { Avatar } from "@material-ui/core";
import React from "react";
import "./MessageSender.css";
import {
  VideoCallOutlined,
  PhotoLibrary,
  InsertEmoticon,
} from "@material-ui/icons";

function MessageSender() {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="message-sender__top">
        <Avatar />
        <form>
          <input placeholder="What's on your mind" name="chat" />
          <input placeholder="image URL (Optional)" />
          <button type="submit" onClick={submitHandler}>
            Handle Submit
          </button>
        </form>
      </div>
      <div className="message-sender__bottom">
        <div className="message-sender__option">
          <VideoCallOutlined style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="message-sender__option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Live Video</h3>
        </div>
        <div className="message-sender__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Live Video</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
