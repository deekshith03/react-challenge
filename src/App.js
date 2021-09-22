import { Route, Switch } from "react-router-dom";
import Dashboard from "./DashBoard";
import SignIn from "./SignIn";
import StudentTable from "./StudentTable";
import ChangePassword from "./ChangePassword";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/table" component={StudentTable} />
        <Route path="/changepassword" component={ChangePassword}/>
      </Switch>
    </div>
  );
}

export default App;
