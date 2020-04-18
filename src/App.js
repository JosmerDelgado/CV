import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyAppBar from "./components/MyAppBar";
import { Router } from "@reach/router";
import TimeLine from "./screens/TimeLine";
import Projects from "./screens/Projects";
import Resume from "./screens/Resume";
import Contact from "./screens/Contact";
import Blog from "./screens/Blog";

const Main = props => (
  <div className="App-header" style={props.style}>
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </div>
);

const commonStyle = { paddingTop: "75px" };

function App() {
  return (
    <div className="App">
      <header>
        <MyAppBar />
      </header>
      <Router primary={false} style={commonStyle}>
        <Main path="/" />
        <TimeLine path="/timeline" />
        <Projects path="/projects" />
        <Resume path="/resume" />
        <Contact path="/contact" />
        <Blog path="/blog" />
      </Router>
    </div>
  );
}

export default App;
