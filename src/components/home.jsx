import React from "react";
import { Link } from "react-router-dom";
import {getUserSubreddits} from "../util/snoowrap_util";
import {Sidebar} from "./sidebar";

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subredditEmpty: true,
      subreddits: '',
    }
  }

  async componentDidMount() {
    const subreddits = await getUserSubreddits().then((listings) => {
      const [...rest] = listings;
      return rest;
    });
    this.setState({subredditEmpty: false, subreddits: subreddits});
  }

  render() {
    return (
      <>
        <Sidebar 
          subredditList={this.state.subreddits} 
          subredditEmpty={this.state.subredditEmpty}
        />
      </>
    )
  }
}

export default Homepage;