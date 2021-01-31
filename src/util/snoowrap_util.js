import snoowrap from "snoowrap";
import {getAuth} from "./reddit_util";

export const getSnoowrap = () => {
  const auth_token = getAuth();

  if(auth_token != null) {
    const reddit_wrapper = new snoowrap({
      userAgent: 'collective',
      accessToken: getAuth()
    });
    // console.log(reddit_wrapper);
    return reddit_wrapper;
  }
  window.location.href='/login';
}

export const getUserInfo = () => {
  return getSnoowrap().getMe().then(console.log);
}

export const getUserSubreddits = () => {
  return getSnoowrap().getSubscriptions().fetchAll();
}

export const getScopes = () => {
  return getSnoowrap().getOauthScopeList().then(console.log);
}

export const getSubredditContent = (name) => {
  const content = getSnoowrap().getSubreddit(name).fetch();
  return content;
}