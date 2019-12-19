import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="pb-4 bg-primary text-light" id="footer">
          <div className="container">
            <div className="row mb-5">
              <div className="col-6 col-lg-3 col-xl-2">
                <h5>Navigate</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a href="/borrow-items" className="nav-link">
                      Borrow Items
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Borrow Time
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Make a Quick Borrow Request
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-lg">
                <h5>Contact</h5>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex">
                    <img
                      className="icon"
                      src="assets/img/icons/theme/map/marker-1.svg"
                      alt="marker-1 icon"
                      data-inject-svg
                    />
                    <div className="ml-3">
                      <span>Philadelphia, PA </span>
                    </div>
                  </li>
                  <li className="mb-3 d-flex">
                    <img
                      className="icon"
                      src="assets/img/icons/theme/communication/call-1.svg"
                      alt="call-1 icon"
                      data-inject-svg
                    />
                    <div className="ml-3">
                      <span>+1 717-524-6995</span>
                      <span className="d-block text-muted text-small">
                        Mon - Fri 9am - 5pm
                      </span>
                    </div>
                  </li>
                  <li className="mb-3 d-flex">
                    <img
                      className="icon"
                      src="assets/img/icons/theme/communication/mail.svg"
                      alt="mail icon"
                      data-inject-svg
                    />
                    <div className="ml-3">
                      <a href="#">tayloraj10@gmail.com</a>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <div className="col-lg-5 col-xl-4 mt-3 mt-lg-0">
                <h5>Subscribe</h5>
                <p>
                  The latest Leap news, articles, and resources, sent straight
                  to your inbox every month.
                </p>
                <form action="/forms/mailchimp.php" data-form-email novalidate>
                  <div className="form-row">
                    <div className="col-12">
                      <input
                        type="email"
                        className="form-control mb-2"
                        placeholder="Email Address"
                        name="email"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <div
                        className="d-none alert alert-success"
                        role="alert"
                        data-success-message
                      >
                        Thanks, a member of our team will be in touch shortly.
                      </div>
                      <div
                        className="d-none alert alert-danger"
                        role="alert"
                        data-error-message
                      >
                        Please fill all fields correctly.
                      </div>
                      <div
                        data-recaptcha
                        data-sitekey="INSERT_YOUR_RECAPTCHA_V2_SITEKEY_HERE"
                        data-size="invisible"
                        data-badge="bottomleft"
                      ></div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-loading btn-block"
                        data-loading-text="Sending"
                      >
                        <img
                          className="icon"
                          src="assets/img/icons/theme/code/loading.svg"
                          alt="loading icon"
                          data-inject-svg
                        />
                        <span>Subscribe</span>
                      </button>
                    </div>
                  </div>
                </form>
                <small className="text-muted form-text">
                  We’ll never share your details. See our{" "}
                  <a href="#">Privacy Policy</a>
                </small>
              </div> */}
            </div>
            <div className="row justify-content-center mb-2">
              <div className="col-auto">
                <ul className="nav">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <img
                        className="icon undefined"
                        src="assets/img/icons/social/instagram.svg"
                        alt="instagram social icon"
                        data-inject-svg
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <img
                        className="icon undefined"
                        src="assets/img/icons/social/twitter.svg"
                        alt="twitter social icon"
                        data-inject-svg
                      />
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <img
                        className="icon undefined"
                        src="assets/img/icons/social/facebook.svg"
                        alt="facebook social icon"
                        data-inject-svg
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col col-md-auto text-center">
                <small className="text-muted">
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
