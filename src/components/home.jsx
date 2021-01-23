import React from "react";
import { Link } from "react-router-dom";
import {getUserInfo} from "../util/snoowrap_util";
import {Sidebar} from "./sidebar";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    getUserInfo();
  }

  render() {
    return (
      <>
      <Sidebar />

      </>
    )
  }
}

export default Homepage;