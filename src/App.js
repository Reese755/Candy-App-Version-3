import * as React from "react";
import CandyContainer from "./CandyContainer";
import Header from "./Header";
import AddCandy from "./AddCandy";
import About from "./About";
import Candy from "./Candy";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const myStyle = { 
  color: "orange",
  textAlign: "center"
}

function App() {
  return (
    <div>
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addcandy">Add A New Candy</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
          <CandyContainer />
          </Route>
          <Route path="/addcandy">
        <AddCandy />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
      <h1 style={myStyle}>Welcome To Reese's Pieces</h1>
      <Header />
  
    </div>
  );
}

export default App;

