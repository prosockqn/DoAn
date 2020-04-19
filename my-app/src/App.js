import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
    {/* Router Giữa các trang */}
    <Router>
      <Route path="/infotruong" component={InfoTruongContainer} />
    </Router>
  </div>
  );
}

export default App;
