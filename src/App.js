import Reddit from "./components/reddit";
import Homepage from "./components/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/callback" component={Reddit} exact/>
        <Route path="/" component={Homepage} exact/>
      </Switch>
    </>
  );
}

export default App;
