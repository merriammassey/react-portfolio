import React from "react";
import "./App.css";
//import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Nav from "./components/Nav";
import "@fontsource/roboto";
//<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          {/* <Route path="contact">
            <Contact />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <Portfolio></Portfolio>;
}

/* function Portfolio() {
  return <h2>My Work</h2>;
} */

function Resume() {
  return <h2>Resume</h2>;
}

/* 
function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Portfolio></Portfolio>
      </main>
    </div>
  );
} */

export default App;
