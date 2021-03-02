import axios from "axios";
import keys from '../config/keys';
import snoowrap from "snoowrap";

const clientId = keys.clientId;
const clientSecret = keys.clientSecret;

export const authenticationUrl = snoowrap.getAuthUrl({
  clientId: clientId,
  scope: ['identity', 'account', 'mysubreddits', 'subscribe', 'read'],
  redirectUri: 'http://localhost:3000/callback',
  permanent: false,
  state: 'random'
});

export const redditAuthToken = (code) => {
  const authBasic = window.btoa(clientId + ':' + clientSecret);
  const redditData = new FormData();
  redditData.append('code', code);
  redditData.append('grant_type', 'authorization_code');
  redditData.append('redirect_uri', 'http://localhost:3000/callback');

  return axios({
    method: 'post',
    url: 'https://www.reddit.com/api/v1/access_token',
    data: redditData,
    headers: {
      "Authorization": `Basic ` + authBasic,
      "User-agent": "collective app v1.0",
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
  .then(res => {
    storeAuth(res.data.access_token);
    return;
  }).catch((err) => console.log(err));
}

export const getAuth = () => {
  return JSON.parse(localStorage.getItem('authToken'));
}

export const logoutAuth = () => {
  localStorage.removeItem('authToken');
  window.location.href = '/login';
}

const storeAuth = (authtoken) => {
  localStorage.setItem('authToken', JSON.stringify(authtoken));
}



