import React, {useEffect} from "react";
import {Navbar} from "./navbar";
import {Posts} from "./posts_item";
// import {Container, Row, Col} from 'react-bootstrap';
import "../styles/subreddit_view.css";

export const SubredditView = ({content, listings}) => {
  const posts = listings.length !== 0 ? listings.map((post, i) => {
    return (
    <Posts 
      key={i}
      post={post} 
      />
    )
  }) : [];

  // useEffect (() => {
  //   this._div.scrollTop = 0;
  // },[]);
  return (
    <div 
      className="subreddit_view_container">
      <div className="header">
        <Navbar 
          content = {content.url}
          subreddit_icon = {content.icon_img}
        />
      </div>
      <div className="content_view">
        {
          content.banner_size ?
          <img
            alt="banner_img"
            className="banner_img"
            src={content.banner_background_image}
          /> : null
        }
        {          
          content.icon_img ? (
          <img
            alt="subreddit_icon"
            className="icon_img"
            src={content.icon_img}
          /> 
          ) : null
        }
        <div className="listingsContainer">
          <ul>
            {posts}
          </ul>
        </div>
      </div>
    </div>
  )
}
