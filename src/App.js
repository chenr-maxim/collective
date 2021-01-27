import Reddit from "./components/reddit";
import Homepage from "./components/home";
import Login from "./components/login";
import {PrivateRoute} from "./util/routes";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/callback" render={() => (<Redirect to="/" />)} component={Reddit} />
        <PrivateRoute path="/" component={Homepage} exact/>
      </Switch>
    </>
  );
}

export default App;
