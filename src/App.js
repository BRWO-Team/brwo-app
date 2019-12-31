import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeRoute } from './actions/router.action';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ItemsList from './components/ItemsList';
import AddFormControl from './components/AddFormControl'
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />

        {(this.props.router.route === 'Home' || !this.props.router.route) && (
          <Home />
        )}
        {this.props.router.route === 'Login' && <Login />}
        {this.props.router.route === 'borrow-items' && <ItemsList />}
        {this.props.router.route === 'add' && <AddFormControl />}

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
  changeRoute
})(App);

export { App };
