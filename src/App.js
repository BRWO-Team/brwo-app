import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeRoute } from './actions/router.action';
import { setLogin } from './actions/login.action';
import { signout, verifyUser } from './actions/firebase.action';

import Drawer from '@material-ui/core/Drawer';
import FooterWeb from './components/Web/FooterWeb';
import HeaderWeb from './components/Web/HeaderWeb';
import Home from './components/Web/Home';
import AddWeb from './components/Web/AddWeb';
import FeedWeb from './components/Web/FeedWeb';
import Login from './components/Web/Login';

import CircularProgress from '@material-ui/core/CircularProgress';

import './App.css';

import Account from './components/Mobile/Account';
import Footer from './components/Mobile/Footer';
import Header from './components/Mobile/Header';
import AddListing from './components/Mobile/AddListing';
import Feed from './components/Mobile/Feed';
// import Home from './components/Home';
// import Login from './components/Login';

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
    let width = window.innerWidth;
    width = 769
    // console.log(width);
    if (width > 768) {
      return (
        <div className='App'>
          <HeaderWeb />
          <Drawer
            anchor='top'
            open={this.props.login.isOpen}
            onClose={this.handleCloseLogin}
          >
            <Login />
          </Drawer>

          {(this.props.router.route === 'Home' || !this.props.router.route) && (
            <Home />
          )}

          {this.props.router.route === 'borrow-items' && <FeedWeb />}
          {this.props.router.route === 'add' && <AddWeb />}

          {this.props.firebase.isFetching ||
            (this.props.items.isFetching && (
              <div className='parent'>
                <CircularProgress color='secondary' className='child' />
              </div>
            ))}

          <FooterWeb />
          <a
            href='#'
            className='btn back-to-top btn-primary btn-round'
            data-smooth-scroll
            data-aos='fade-up'
            data-aos-mirror='true'
            data-aos-once='false'
          >
            <img
              className='icon'
              src='https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-29-512.png'
              alt='arrow-up icon'
              data-inject-svg
            />
          </a>
        </div>
      );
    } else {
      return (
        <div className='App'>
          <div className='main'>
            <HeaderWeb />
            <Drawer
              anchor='top'
              open={this.props.login.isOpen && !this.props.firebase.user}
              onClose={this.handleCloseLogin}
            >
              <Login />
            </Drawer>
            {(this.props.router.route === 'Home' ||
              !this.props.router.route) && <Home />}
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
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {
  changeRoute,
  setLogin,
  verifyUser,
  signout
})(App);

export { App };
