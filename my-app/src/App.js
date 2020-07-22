import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, } from "react-router-dom";
import Login from './container/LoginContainer.js'
import admin from './container/AdminContainer'
import DangKy from './container/DangKyContainer'
import Home from './container/HomeContainer'
import Thi from './container/ThiContainer'
import LoginChat from './container/LoginChatContainer'
import Chat from './container/ChatContainer'

import { createBrowserHistory } from "history";

const history = createBrowserHistory();
function App() {
  return (
    <div>
      {/* <Switch>
        <Route path="/dangky" component={DangKy} />
        <Route path="/admin" component={admin} />
        <Route path="/home" component={Home} />
        <Route path="/thi" component={Thi} />
        <Route exact="/" component={Login} />
      </Switch> */}
      <Switch>
        <Route path="/chat" component={Chat} />
        <Route exact="/" component={LoginChat} />
      </Switch>
    </div>
  );
}

export default App;
