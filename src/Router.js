import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux'
import LoginForm from './components/LoginForm';
import WelcomeScreen from './components/WelcomeScreen'



class  RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="auth">
            <Scene  key='login' component={LoginForm} title='Logging System' />
          </Scene>
          <Scene  key="main">
            <Scene  key='welcome' component={WelcomeScreen} title='Welcome Screen' />
          </Scene>
        </Scene>
      </Router>
    );
  }
};

export default RouterComponent;
