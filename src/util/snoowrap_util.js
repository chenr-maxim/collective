import snoowrap from "snoowrap";
import {getAuth} from "./reddit_util";

export const getSnoowrap = () => {
  const r = new snoowrap({
    userAgent: 'collective',
    accessToken: getAuth()
  });
  return r;
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

export const getSubreddit = (name) => {
  return getSnoowrap().getSubreddit(name);
}