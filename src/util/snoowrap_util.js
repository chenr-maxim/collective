import snoowrap from "snoowrap";
import {getAuth} from "./reddit_util";

export const getSnoowrap = () => {
  const r = new snoowrap({
    userAgent: 'collective',
    accessToken: getAuth()
  });
  console.log('snoowrap');
  return r;
}

export const getUserInfo = () => {
  return getSnoowrap().getMe().then(console.log);
}

