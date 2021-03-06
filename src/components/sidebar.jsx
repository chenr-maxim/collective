import React from "react";
import {SubredditItem} from "./subreddits/subreddit_item";
import {getUserSubreddits} from "../util/snoowrap_util";
import {logoutAuth} from "../util/reddit_util";
import "./styles/sidebar.css"

const sortArray = (array) => {
  array.sort(function(a, b) {
    var subredditA = (a.display_name).toUpperCase();
    var subredditB = (b.display_name).toUpperCase();
    return (subredditA < subredditB ) ? -1 : ( subredditA > subredditB ) ? 1 : 0;
  });
}

export class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      subredditEmpty: true,
      subredditList: []
    }
  }

  componentDidMount() {
    getUserSubreddits().then((listings) => {
      const [...rest] = listings;
      this.setState({subredditEmpty: false, subredditList: rest});
    }).catch((err) => {
      console.log(err);
      window.location.href='/login';
    });
  }

  render() {
    const list = !this.state.subredditEmpty ? 
      (
      sortArray(this.state.subredditList),
      this.state.subredditList.map((item, i) => {
        return <SubredditItem
          key = {i}
          subreddit={item}
        />
      })) : [];

    return (
      <div className="subredditContainer">
        <button className="logoutButton" onClick={logoutAuth}> logout</button>
        <div className="collectiveTitle"> 
          co<span style={{color: "#2699FB"}}>ll</span>ective 
        </div>
        <div className="subredditsTitle"> 
          my subreddits 
        </div>
        <ul className="subredditList">
          {list}
        </ul>
      </div>
    )
  }
}