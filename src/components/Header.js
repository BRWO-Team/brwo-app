import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar-container ">
          <nav
            className="navbar navbar-expand-lg  navbar-light bg-primary-alt "
            data-sticky="top"
          >
            <div className="container ">
              <a className="navbar-brand fade-page" href="/">
                <h1>BRWO</h1>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <img
                  className="icon navbar-toggler-open"
                  src="https://static.thenounproject.com/png/204478-200.png"
                  alt="menu interface icon"
                  data-inject-svg
                />
                <img
                  className="icon navbar-toggler-close"
                  src="assets/img/icons/interface/cross.svg"
                  alt="cross interface icon"
                  data-inject-svg
                />
              </button>
              <div className="collapse navbar-collapse justify-content-end">
                <div className="py-2 py-lg-0">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a
                        href="/borrow-items"
                        className="nav-link dropdown-toggle"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        Borrow Items
                      </a>
                      <div className="dropdown-menu row">
                        <div className="col-auto" data-dropdown-content></div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        href="/borrow-time"
                        className="nav-link dropdown-toggle"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        Borrow Time
                      </a>
                      <div className="dropdown-menu row">
                        <div className="col-auto" data-dropdown-content></div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle "
                        data-toggle="dropdown-grid"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        Make a Request to Borrow
                      </a>
                      <div className="dropdown-menu row">
                        <div className="col-auto" data-dropdown-content>
                          <div className="dropdown-grid-menu">
                            <a
                              href="#"
                              className="dropdown-item fade-page"
                            >
                              Quick Request
                            </a>
                            <a
                              href="#"
                              className="dropdown-item fade-page"
                            >
                              Items
                            </a>
                            <a
                              href="#"
                              className="dropdown-item fade-page"
                            >
                              Time
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
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

export default Header;
