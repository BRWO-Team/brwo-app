import React from 'react';

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
                    <a href='/' className='nav-link'>
                      Home
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='/borrow-items' className='nav-link'>
                      Borrow Items
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='/borrow-time' className='nav-link'>
                      Borrow Time
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='/' className='nav-link'>
                      Make a Quick Borrow Request
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

export default Footer;
