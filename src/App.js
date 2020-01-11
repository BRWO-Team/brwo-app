import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeRoute } from './actions/router.action';
import { setLogin } from './actions/login.action';
import { signout, verifyUser } from './actions/firebase.action';

import Drawer from '@material-ui/core/Drawer';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import AddFormControl from './components/AddFormControl';
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
        <Header
          changeRoute={this.props.changeRoute}
          setLogin={this.props.setLogin}
          signout={this.props.signout}
          verifyUser={this.props.verifyUser}
          user={this.props.firebase.user}
        />
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
        {this.props.router.route === 'Add' && <AddFormControl />}

        {this.props.firebase.isFetching ||
          (this.props.items.isFetching && (
            <div className='parent'>
              <CircularProgress color='secondary' className='child' />
            </div>
          ))}

        <Footer />
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

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {
  changeRoute,
  setLogin,
  verifyUser,
  signout
})(App);

export { App };
