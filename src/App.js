import { Route, Switch } from "react-router-dom";
import SignIn from "./SignIn";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
