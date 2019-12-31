import React from 'react';
import { connect } from 'react-redux';
import { changeRoute } from '../actions/router.action';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className='pb-4 bg-primary text-light' id='footer'>
          <div className='container'>
            <div className='row mb-5'>
              <div className='col-6 col-lg-3 col-xl-2'>
                <h5>Navigate</h5>
                <ul className='nav flex-column'>
                  <li className='nav-item'>
                    <span
                      className='nav-link'
                      onClick={() => this.props.changeRoute('Home')}
                    >
                      Home
                    </span>
                  </li>

                  <li className='nav-item'>
                    <a
                      href='#'
                      className='btn back-to-top btn-primary btn-round'
                      data-smooth-scroll
                      data-aos='fade-up'
                      data-aos-mirror='true'
                      data-aos-once='false'
                      className='nav-link'
                      onClick={() => this.props.changeRoute('borrow-items')}
                    >
                      Get Started
                    </a>
                  </li>
                </ul>
              </div>
              <div className='col-6 col-lg'>
                <h5>Contact</h5>
                <ul className='list-unstyled'>
                  <li className='mb-3 d-flex'>
                    <img
                      className='icon'
                      src='assets/img/icons/theme/map/marker-1.svg'
                      alt='marker-1 icon'
                      data-inject-svg
                    />
                    <div className='ml-3'>
                      <span>Philadelphia, PA </span>
                    </div>
                  </li>
                  <li className='mb-3 d-flex'>
                    <img
                      className='icon'
                      src='assets/img/icons/theme/communication/mail.svg'
                      alt='mail icon'
                      data-inject-svg
                    />
                    <div className='ml-3'>
                      <a href='mailto: brwo@gmail.com'>brwo@gmail.com</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className='row justify-content-center'>
              <div className='col col-md-auto text-center'>
                <small className='text-muted'>
                  &copy; 2019 BRWO. All rights reserved.
                </small>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {
  changeRoute
})(Footer);

export { Footer };
