import "./App.css";
import Login from "./components/screen/Login";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from "./components/Header";
import AllField from "./components/screen/AllField";
import Registration from "./components/screen/Registration";

function App() {
  return (
    <Router>
      <div className="main-bg">
        <div className="container">
          {/* ---- common header ------ */}
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/all-field">
              <AllField />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
