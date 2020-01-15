import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeRoute } from './actions/router.action';
import { setLogin } from './actions/login.action';
import { verifyUser } from './actions/firebase.action';

import Drawer from '@material-ui/core/Drawer';
import FooterWeb from './components/Web/FooterWeb';
import HeaderWeb from './components/Web/HeaderWeb';
import Home from './components/Web/Home';
import AddWeb from './components/Web/AddWeb';
import FeedWeb from './components/Web/FeedWeb';
import Login from './components/Web/Login';

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
    let width = window.innerWidth;
    console.log(width)
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
    }
    else {
      return (
        <div className='App'>
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
    }
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {
  changeRoute,
  setLogin,
  verifyUser
})(App);

export { App };
