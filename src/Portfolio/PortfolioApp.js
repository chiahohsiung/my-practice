import React, { useState, useEffect, useRef }from 'react';
import Header from './Header.js'
import About from './About.js'
import Home from './Home.js'
import Projects from './Projects.js'
import { Route, Switch } from 'react-router-dom';

const PortfolioApp = () => {
  return(
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />      
      </Switch>
    </div>
  ) 
}

export default PortfolioApp;
