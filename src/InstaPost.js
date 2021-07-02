import React from 'react';
import './InstaPost.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SendIcon from '@material-ui/icons/Send';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

function InstaPost({ profilepic, username, img, likes, caption }) {
  return (
    <div className="instaPost">
      <div className="head">
        <img src={profilepic} alt="Insta Post" />
        <h5>{username}</h5>
      </div>
      <div className="main_feed">
        <img src={img} alt="" />
      </div>
      <div className="bottom">
        <div className="social_icons">
          <FavoriteBorderIcon className="social" />
          <ChatBubbleOutlineIcon className="social" />
          <SendIcon className="social" />
        </div>
        <div className="save">
          <BookmarkBorderIcon />
        </div>
      </div>
      <div className="captions">
        <h3>{likes} Likes</h3>
        <p>{caption}</p>
      </div>
    </div>
  );
}

export default InstaPost;
