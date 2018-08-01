import React, { Component } from 'react';
import { Button, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Input, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { connect } from 'react-redux'
import * as Keychain from 'react-native-keychain'

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 20,
  },
});

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onLoginPress = this.onLoginPressed.bind(this)
  }

  onEmailChange(email) {
    this.props.emailChanged(email);
  }

  onPasswordChange(password) {
    this.props.passwordChanged(password);
  }

  onLoginPressed() {
    const { email, password } = this.props;

    async () => {

      console.log('here')
      const username = 'zuck';
      const password = 'poniesRgr8';
    
      // Store the credentials
      await Keychain.setGenericPassword(username, password);
    
      try {
        // Retreive the credentials
        const credentials = await Keychain.getGenericPassword();
        if (credentials) {
          console.log('Credentials successfully loaded for user ' + credentials.username);
        } else {
          console.log('No credentials stored')
        }
      } catch (error) {
        console.log('Keychain couldn\'t be accessed!', error);
      }
      await Keychain.resetGenericPassword()
    }

    this.props.loginUser({ email, password });
  }

  renderLoginButton() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (<Button title="Login" text="login" onPress={this.onLoginPress} />);
  }

  render() {
    const { errorText } = styles;
    return (
        <Card>
            <CardItem>
                <Input
                    placeholder="Enter your email"
                    autoCorrect={false}
                    label="Email"
                    value={this.props.email}
                    onChangeText={this.onEmailChange}
                />
            </CardItem>
            <CardItem>
                <Input
                    secureTextEntry
                    placeholder="Enter your password"
                    autoCorrect={false}
                    label="Password"
                    value={this.props.password}
                    onChangeText={this.onPasswordChange}
                />
                
            </CardItem>
            <Text style={errorText}>
              { this.props.error }
            </Text>
            { this.renderLoginButton() }
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { email, password, error, user, loading } = state.auth;
  return {
    email,
    password,
    error,
    user,
    loading,
  };
};



export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(LoginForm);