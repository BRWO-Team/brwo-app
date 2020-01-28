import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeRoute } from './actions/router.action';
import { setLogin } from './actions/login.action';
import { signout, verifyUser } from './actions/firebase.action';

import Account from './components/Account';
import AddListing from './components/AddListing';
import Login from './components/Login';
import Footer from './components/Footer';
import Header from './components/Header';
import Feed from './components/Feed';

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
          <div className='filter-header'>
            <Header />
          </div>
          {this.props.router.route === 'Home' && <Feed />}
          {this.props.router.route === 'Add' && <AddListing />}

          {this.props.router.route === 'Account' && (
            <div>{!this.props.firebase.user ? <Login /> : <Account />}</div>
          )}

          {this.props.firebase.isFetching ||
            (this.props.items.isFetching && (
              <div className='loading'>
                <CircularProgress
                  style={{ color: '#BB86FC' }}
                  className='child'
                />
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
