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
                        href="#"
                        className="nav-link dropdown-toggle "
                        data-toggle="dropdown-grid"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        Borrow Items
                      </a>
                      <div className="dropdown-menu row">
                        <div className="col-auto" data-dropdown-content>
                          <div className="dropdown-grid-menu">
                            <a
                              href="home-course.html"
                              className="dropdown-item fade-page"
                            >
                              Course
                            </a>
                            <a
                              href="home-coworking.html"
                              className="dropdown-item fade-page"
                            >
                              Coworking
                              <span className="badge badge-primary ml-2">New</span>
                            </a>
                            <a
                              href="home-cryptocurrency.html"
                              className="dropdown-item fade-page"
                            >
                              Cryptocurrency
                            </a>
                            <a
                              href="home-desktop-app.html"
                              className="dropdown-item fade-page"
                            >
                              Desktop App
                            </a>
                            <a
                              href="home-event.html"
                              className="dropdown-item fade-page"
                            >
                              Event
                            </a>
                            <a
                              href="home-mobile-app.html"
                              className="dropdown-item fade-page"
                            >
                              Mobile App
                            </a>
                            <a
                              href="home-portfolio.html"
                              className="dropdown-item fade-page"
                            >
                              Portfolio
                            </a>
                            <a
                              href="home-saas.html"
                              className="dropdown-item fade-page"
                            >
                              SaaS
                            </a>
                            <a
                              href="home-saas-trend.html"
                              className="dropdown-item fade-page"
                            >
                              SaaS - Trend
                            </a>
                            <a
                              href="home-software-library.html"
                              className="dropdown-item fade-page"
                            >
                              Software Library
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown-grid"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        Borrow Time
                      </a>
                      <div className="dropdown-menu row">
                        <div className="col-auto" data-dropdown-content>
                          <div className="dropdown-grid-menu">
                            <a
                              href="about-company.html"
                              className="dropdown-item fade-page"
                            >
                              About Company
                            </a>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Careers</span>
                                <img
                                  className="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div className="dropdown-menu row">
                                <div className="col-auto" data-dropdown-content>
                                  <div className="dropdown-grid-menu">
                                    <a
                                      href="careers.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Careers
                                    </a>
                                    <a
                                      href="career-single.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Career Single
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Contact</span>
                                <img
                                  className="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div className="dropdown-menu row">
                                <div className="col-auto" data-dropdown-content>
                                  <div className="dropdown-grid-menu">
                                    <a
                                      href="contact.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Contact
                                    </a>
                                    <a
                                      href="contact-multiple-locations.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Contact - Multiple Locations
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Customers</span>
                                <img
                                  className="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div className="dropdown-menu row">
                                <div className="col-auto" data-dropdown-content>
                                  <div className="dropdown-grid-menu">
                                    <a
                                      href="customer-stories.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Customer Stories
                                    </a>
                                    <a
                                      href="customer-story.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Customer Story
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Knowledgebase</span>
                                <img
                                  className="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div className="dropdown-menu row">
                                <div className="col-auto" data-dropdown-content>
                                  <div className="dropdown-grid-menu">
                                    <a
                                      href="knowledgebase.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Knowledgebase
                                    </a>
                                    <a
                                      href="knowledgebase-category.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Knowledgebase Category
                                    </a>
                                    <a
                                      href="knowledgebase-article.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Knowledgebase Article
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Pricing</span>
                                <img
                                  className="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div className="dropdown-menu row">
                                <div className="col-auto" data-dropdown-content>
                                  <div className="dropdown-grid-menu">
                                    <a
                                      href="pricing-plans.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Pricing Plans
                                    </a>
                                    <a
                                      href="pricing-plans-table.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Pricing Plans Table
                                    </a>
                                    <a
                                      href="pricing-slider.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Pricing Slider
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Utility</span>
                                <img
                                  className="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div className="dropdown-menu row">
                                <div className="col-auto" data-dropdown-content>
                                  <div className="dropdown-grid-menu">
                                    <a
                                      href="404.html"
                                      className="dropdown-item fade-page"
                                    >
                                      404
                                    </a>
                                    <a
                                      href="utility-coming-soon-subscribe.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Coming Soon - Subscribe
                                    </a>
                                    <a
                                      href="utility-coming-soon.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Coming Soon
                                    </a>
                                    <a
                                      href="utility-confirmation-download.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Confirmation - Download
                                    </a>
                                    <a
                                      href="utility-confirmation-subscription.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Confirmation - Subscription
                                    </a>
                                    <a
                                      href="utility-legal.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Legal
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Account</span>
                                <img
                                  className="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div className="dropdown-menu row">
                                <div className="col-auto" data-dropdown-content>
                                  <div className="dropdown-grid-menu">
                                    <a
                                      href="account-onboarding.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Onboarding
                                    </a>
                                    <a
                                      href="account-sign-in.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Sign In
                                    </a>
                                    <a
                                      href="account-sign-up.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Sign Up
                                    </a>
                                    <a
                                      href="account-sign-up-image.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Sign Up Image
                                    </a>
                                    <a
                                      href="account-forgot-password.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Forgot Password
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown-grid"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        Make a Request to Borrow
                      </a>
                      <div className="dropdown-menu row">
                        <div className="col-auto" data-dropdown-content>
                          <div className="dropdown-grid-menu">
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Blog Layouts</span>
                                <img
                                  className="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div className="dropdown-menu row">
                                <div className="col-auto" data-dropdown-content>
                                  <div className="dropdown-grid-menu">
                                    <a
                                      href="blog-cards.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Blog Cards
                                    </a>
                                    <a
                                      href="blog-masonry.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Blog Masonry
                                    </a>
                                    <a
                                      href="blog-sidebar.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Blog Sidebar
                                    </a>
                                    <a
                                      href="blog-magazine.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Blog Magazine
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Article Layouts</span>
                                <img
                                  className="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div className="dropdown-menu row">
                                <div className="col-auto" data-dropdown-content>
                                  <div className="dropdown-grid-menu">
                                    <a
                                      href="blog-article.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Article Basic
                                    </a>
                                    <a
                                      href="blog-article-video.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Article Video
                                    </a>
                                    <a
                                      href="blog-article-image-header.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Article Image Header
                                    </a>
                                    <a
                                      href="blog-article-image-header-parallax.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Article Image Parallax
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
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
