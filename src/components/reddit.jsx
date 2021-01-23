import React from "react";
import {redditAuthToken} from "../util/redditsetup";

class Reddit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    redditAuthToken();
    window.location.href = ""
  }

  render() {
    return (
      <div>
        <h4> Reddit </h4>
      </div>
    )
  }
}

export default Reddit;