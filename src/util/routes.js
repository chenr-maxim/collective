
import {getAuth} from './reddit_util';
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    getAuth() != null
    ? <Component {...props} />
    : <Redirect to='/login' />
  )} />
)

