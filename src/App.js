import React from 'react';
import './App.css';
import Home from './components/Home';
import CouterC from './components/CouterC';
import CouterF from './components/CouterF';
import CouterR from './components/CouterR';
import CouterIm from './components/CouterIm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';





function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/class-component' exact component={CouterC} />
          <Route path='/function-component' exact component={CouterF} />
          <Route path='/useRedux' exact component={CouterR} />
          <Route path='/immerjs' exact component={CouterIm} />
         
          
        </Switch>

      </Router>
    </>
  );
}

export default App;
