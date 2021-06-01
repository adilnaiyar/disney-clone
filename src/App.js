import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/login";
import Headers from "./components/Header/header";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Headers />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
