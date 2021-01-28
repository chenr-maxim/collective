import snoowrap from "snoowrap";
import {getAuth} from "./reddit_util";

export const getSnoowrap = () => {
  try {
    const reddit_wrapper = new snoowrap({
      userAgent: 'collective',
      accessToken: getAuth()
    });
    return reddit_wrapper;
  }
  catch {
    console.log('cant get snoowrap');
    return false;
  }
  
}

export const getUserInfo = () => {
  return getSnoowrap().getMe().then(console.log);
}

export const getUserSubreddits = () => {
  return getSnoowrap().getSubscriptions({limit: 2});
  // .fetchAll();
}

export const getScopes = () => {
  return getSnoowrap().getOauthScopeList().then(console.log);
}

export const getSubreddit = (name) => {
  return getSnoowrap().getSubreddit(name);
}