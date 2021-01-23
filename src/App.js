import Reddit from "./components/reddit";
import Homepage from "./components/home";
import Login from "./components/login";
import {PrivateRoute} from "./util/routes";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/callback" render={() => (<Redirect to="/" />)} component={Reddit} />
        <PrivateRoute path="/" component={Homepage} exact/>
        <PrivateRoute path="/sidebar" component={Sidebar} exact/>
      </Switch>
    </>
  );
}

export default App;
