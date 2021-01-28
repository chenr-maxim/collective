import React from "react";
import {redditAuthToken} from "./reddit_util";
import { Redirect } from "react-router-dom";

class Reddit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    }
  }

  async componentDidMount() {
    const code = new URL(window.location.href).searchParams.get('code');
    await redditAuthToken(code);
    this.setState({redirect: true});
  }

  render() {
    const { redirect } = this.state;

    if(redirect) {
      return <Redirect to='/'/>
    }
    return (
      <>
        {/* loading spinner */}
      </>
    )
  }
}

export default Reddit;