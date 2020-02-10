import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createAccount, signin, signout } from '../actions/firebase.action';

import { changeRoute } from '../actions/router.action';

import Button from '@material-ui/core/Button';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordVerificationChange = this.handlePasswordVerificationChange.bind(
      this
    );
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCreateAccount = this.handleCreateAccount.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.close = this.close.bind(this);
    this.state = {
      password: '',
      email: '',
      name: '',
      passwordVerification: '',
      createAccount: false
    };
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handlePasswordVerificationChange(event) {
    this.setState({ passwordVerification: event.target.value });
  }

  close(event) {
    this.setState({ createAccount: false });
  }

  validateCreds = () => {
    if (
      this.state.password === this.state.passwordVerification &&
      this.state.password.length > 6 &&
      this.state.name.length > 5 &&
      this.state.email > 5
    ) {
      return true;
    }
    alert('Please fill in all fields');
    return false;
  };

  handleSubmit() {
    if (this.state.createAccount) {
      if (this.validateCreds())
        this.props.createAccount(
          this.state.email,
          this.state.password,
          this.state.name
        );
    } else {
      this.handleSignIn();
    }
  }

  handleCreateAccount() {
    this.setState({ createAccount: true });
  }

  handleSignIn() {
    this.props.signin(this.state.email, this.state.password);
  }

  handleSignOut() {
    this.props.signout();
  }

  render() {
    return (
      <div>
        {this.state.createAccount && (
          <ListItem button onClick={this.close}>
            <ListItemIcon style={{ color: '#BB86FC' }}>
              <ChevronLeft />
            </ListItemIcon>
          </ListItem>
        )}
        <div style={{ color: '#d9d9d9' }} className='login'>
          {this.state.createAccount ? <h3>Create Account</h3> : <h3>Login</h3>}
          <Typography
            style={{
              color: '#d9d9d9',
              display: 'inline',
              paddingRight: '.5em'
            }}
            variant='overline'
          >
            Email
          </Typography>
          <input
            onChange={this.handleEmailChange}
            value={this.state.email}
            style={{
              backgroundColor: '#666666',
              color: '#d9d9d9',
              padding: '.5em',
              fontSize: '1em',
              display: 'block',
              marginBottom: '1em',
              width: '100%'
            }}
          />
          {this.state.createAccount && (
            <React.Fragment>
              <Typography
                style={{
                  color: '#d9d9d9',
                  display: 'inline',
                  paddingRight: '.5em'
                }}
                variant='overline'
              >
                Name
              </Typography>
              <input
                onChange={this.handleNameChange}
                value={this.state.name}
                style={{
                  backgroundColor: '#666666',
                  color: '#d9d9d9',
                  padding: '.5em',
                  fontSize: '1em',
                  display: 'block',
                  marginBottom: '1em',
                  width: '100%'
                }}
              />
            </React.Fragment>
          )}
          <Typography
            style={{
              color: '#d9d9d9',
              display: 'inline',
              paddingRight: '.5em'
            }}
            variant='overline'
          >
            Password
          </Typography>
          <input
            value={this.state.password}
            type={'password'}
            onChange={this.handlePasswordChange}
            style={{
              backgroundColor: '#666666',
              color: '#d9d9d9',
              padding: '.5em',
              fontSize: '1em',
              display: 'block',
              marginBottom: '1em',
              width: '100%'
            }}
          />

          {this.state.createAccount && (
            <React.Fragment>
              <Typography
                style={{
                  color: '#d9d9d9',
                  display: 'inline',
                  paddingRight: '.5em'
                }}
                variant='overline'
              >
                Verify Password
              </Typography>
              <input
                value={this.state.passwordVerification}
                type={'password'}
                onChange={this.handlePasswordVerificationChange}
                style={{
                  backgroundColor: '#666666',
                  color: '#d9d9d9',
                  padding: '.5em',
                  fontSize: '1em',
                  display: 'block',
                  marginBottom: '1em',
                  width: '100%'
                }}
              />
            </React.Fragment>
          )}

          <Button
            style={{
              color: '#d9d9d9',
              marginTop: '1em',
              float: 'left',
              marginRight: '1em'
            }}
            onClick={this.handleSubmit}
            className='submit-button'
          >
            {this.state.createAccount ? 'Submit' : 'Sign In'}
          </Button>

          {!this.state.createAccount && (
            <Button
              style={{
                color: '#d9d9d9',
                marginTop: '1em'
              }}
              onClick={this.handleCreateAccount}
              className='create-button'
            >
              Create Account
            </Button>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {
  createAccount,
  changeRoute,
  signin,
  signout
})(Login);

export { Login };
