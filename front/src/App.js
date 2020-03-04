import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./components/nav.component";
import Index from "./components/index.component";
import aboutMe from "./components/aboutMe.component";

export default function App() {
  return (
    <Router>
      <Nav />
      <Route path="/" exact component={Index}/>
      <Route path="/aboutme" exact component={aboutMe}/>
    </Router>
  );
};