import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
// import Questions from './components/questions';
// import Categories from './components/categories';
import Home from './components/home';
import Navbar from './components/navbar';
import Configure from './components/configure';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path='/' component={Home} />
      {/* <Route exact path='/quiz' component={Quiz} /> */}
      <Route exact path='/configure' component={Configure} />
    </Router>
  );
}

export default App;
