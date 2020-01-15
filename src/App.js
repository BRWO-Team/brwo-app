import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeRoute } from './actions/router.action';
import { setLogin } from './actions/login.action';
import { signout, verifyUser } from './actions/firebase.action';

import Drawer from '@material-ui/core/Drawer';

import Account from './components/Account';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import AddListing from './components/AddListing';
import Feed from './components/Feed';
import Login from './components/Login';

import CircularProgress from '@material-ui/core/CircularProgress';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleCloseLogin = this.handleCloseLogin.bind(this);
  }
  componentDidMount() {
    this.props.verifyUser();
  }

  handleCloseLogin = () => {
    this.props.setLogin(false);
  };

  render() {
    return (
      <div className='App'>
        <div className='main'>
          <Drawer
            anchor='top'
            open={this.props.login.isOpen && !this.props.firebase.user}
            onClose={this.handleCloseLogin}
          >
            <Login />
          </Drawer>
          {(this.props.router.route === 'Home' || !this.props.router.route) && (
            <Home />
          )}
          {this.props.router.route === 'Borrow' && <Feed />}
          {this.props.router.route === 'Add' && <AddListing />}
          {this.props.router.route === 'Account' && <Account />}
          {this.props.firebase.isFetching ||
            (this.props.items.isFetching && (
              <div className='loading'>
                <CircularProgress color='secondary' className='child' />
              </div>
            ))}
        </div>

        <div className='bottom'>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {
  changeRoute,
  setLogin,
  verifyUser,
  signout
})(App);

export { App };
