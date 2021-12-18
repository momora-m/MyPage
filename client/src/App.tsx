import React, { FC } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from './components/login/LoginPage';
import Header from './header'
import MainPage from './components/main/MainPage';
import RegisterPage from './components/register/RegisterPage';

export const App: FC = () => (
  <BrowserRouter>
    <Route component={Header}></Route>
    <Switch>
      <React.Fragment>
        <Route exact path="/" component={LoginPage}></Route>
        <Route exact path="/main" component={MainPage}></Route>
        <Route exact path="/register" component={RegisterPage}></Route>
      </React.Fragment>
    </Switch>
  </BrowserRouter>
);

export default App;
