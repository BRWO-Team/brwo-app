import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeRoute } from '../actions/router.action';
import { setLogin } from '../actions/login.action';
import { signout } from '../actions/firebase.action';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <div className='navbar-container '>
          <nav
            className='navbar navbar-expand-lg  navbar-light bg-primary-alt '
            data-sticky='top'
          >
            <div className='container '>
              <div
                className='navbar-brand fade-page header-title'
                onClick={() => this.props.changeRoute('Home')}
              >
                <h1>BRWO</h1>
              </div>
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='.navbar-collapse'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <img
                  className='icon navbar-toggler-open'
                  src='https://static.thenounproject.com/png/204478-200.png'
                  alt='menu interface icon'
                  data-inject-svg
                />
                <img
                  className='icon navbar-toggler-close'
                  src='assets/img/icons/interface/cross.svg'
                  alt='cross interface icon'
                  data-inject-svg
                />
              </button>
              <div className='collapse navbar-collapse justify-content-end'>
                <div className='py-2 py-lg-0'>
                  <ul className='navbar-nav'>
                    <li className='nav-item dropdown'>
                      <div
                        onClick={() => this.props.changeRoute('borrow-items')}
                        className='nav-link dropdown-toggle'
                        aria-expanded='false'
                        aria-haspopup='true'
                      >
                        Get Started
                      </div>
                      <div className='dropdown-menu row'>
                        <div className='col-auto' data-dropdown-content></div>
                      </div>
                    </li>
                    {this.props.firebase.user && (
                      <li className='nav-item dropdown'>
                        <div
                          className='nav-link dropdown-toggle'
                          aria-expanded='false'
                          aria-haspopup='true'
                        >
                          My Account
                        </div>
                        <div className='dropdown-menu row'>
                          <div className='col-auto' data-dropdown-content></div>
                        </div>
                      </li>
                    )}
                    {!this.props.firebase.user ? (
                      <li className='nav-item dropdown'>
                        <div
                          onClick={() => this.props.setLogin(true)}
                          className='nav-link dropdown-toggle'
                          aria-expanded='false'
                          aria-haspopup='true'
                        >
                          Login
                        </div>
                        <div className='dropdown-menu row'>
                          <div className='col-auto' data-dropdown-content></div>
                        </div>
                      </li>
                    ) : (
                      <li className='nav-item dropdown'>
                        <div
                          className='nav-link dropdown-toggle'
                          aria-expanded='false'
                          aria-haspopup='true'
                          onClick={() => this.props.signout()}
                        >
                          Logout
                        </div>
                        <div className='dropdown-menu row'>
                          <div className='col-auto' data-dropdown-content></div>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {
  changeRoute,
  signout,
  setLogin
})(Header);

export { Header };
