import React from "react";
import {authenticationUrl} from "../util/reddit_util";

class Login extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
  }

  render() {
    return (
      <>
        <h4> connect your reddit account to use collective</h4>
        <a href={authenticationUrl}> connect to reddit </a>
      </>
    )
  }
}

export default Login;