import axios from "axios";
import keys from '../config/keys';
import snoowrap from "snoowrap";

const clientId = keys.clientId;
const clientSecret = keys.clientSecret;
const authBasic = window.btoa(clientId + ':' + clientSecret);

const code = new URL(window.location.href).searchParams.get('code');
const redditData = new FormData();
redditData.append('code', code);
redditData.append('grant_type', 'authorization_code');
redditData.append('redirect_uri', 'http://localhost:3000/callback');

export const authenticationUrl = snoowrap.getAuthUrl({
  clientId: clientId,
  scope: ['identity', 'account', 'mysubreddits', 'read'],
  redirectUri: 'http://localhost:3000/callback',
  permanent: false,
  state: 'random'
});

export const redditAuthToken = () => {
  axios({
    method: 'post',
    url: 'https://www.reddit.com/api/v1/access_token',
    data: redditData,
    headers: {
      "Authorization": `Basic ` + authBasic,
      'user-agent': 'collective',
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }).then(res => {
    const reddit = new snoowrap({userAgent: 'collective', accessToken: res.data.access_token});
    localStorage.setItem('reddit', JSON.stringify(reddit));
    console.log(res.data);
    return res.data;
  }).catch((err) => console.log(err));
};