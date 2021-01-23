import React from "react";
import snoowrap from "snoowrap";
import { Link } from "react-router-dom";


class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h4> learning react is hard </h4>
        <a href={authenticationUrl}> connect to reddit </a>
      </>
    )
  }
}

export default Homepage;