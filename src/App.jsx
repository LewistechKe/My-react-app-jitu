import React from 'react';
import { BrowserRouter as Router,  } from 'react-router-dom';
import Navigation from './components/Navigation';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <Router>
      <div>
        <div className="app-header">
          <h1>Lewis Blog App</h1>
        </div>
        <div className="app-body">
          <Navigation />
          <Body />
        </div>
        <div className="app-footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
