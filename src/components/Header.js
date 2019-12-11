import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div class="navbar-container ">
          <nav
            class="navbar navbar-expand-lg bg-white navbar-light"
            data-sticky="top"
          >
            <div class="container">
              <a class="navbar-brand fade-page" href="index.html">
                <h1>BRWO</h1>
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <img
                  class="icon navbar-toggler-open"
                  src="assets/img/icons/interface/menu.svg"
                  alt="menu interface icon"
                  data-inject-svg
                />
                <img
                  class="icon navbar-toggler-close"
                  src="assets/img/icons/interface/cross.svg"
                  alt="cross interface icon"
                  data-inject-svg
                />
              </button>
              <div class="collapse navbar-collapse justify-content-end">
                <div class="py-2 py-lg-0">
                  <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                      <a
                        href="#"
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown-grid"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        Borrow Items
                      </a>
                      <div class="dropdown-menu row">
                        <div class="col-auto" data-dropdown-content>
                          <div class="dropdown-grid-menu">
                            <a
                              href="home-course.html"
                              class="dropdown-item fade-page"
                            >
                              Course
                            </a>
                            <a
                              href="home-coworking.html"
                              class="dropdown-item fade-page"
                            >
                              Coworking
                              <span class="badge badge-primary ml-2">New</span>
                            </a>
                            <a
                              href="home-cryptocurrency.html"
                              class="dropdown-item fade-page"
                            >
                              Cryptocurrency
                            </a>
                            <a
                              href="home-desktop-app.html"
                              class="dropdown-item fade-page"
                            >
                              Desktop App
                            </a>
                            <a
                              href="home-event.html"
                              class="dropdown-item fade-page"
                            >
                              Event
                            </a>
                            <a
                              href="home-mobile-app.html"
                              class="dropdown-item fade-page"
                            >
                              Mobile App
                            </a>
                            <a
                              href="home-portfolio.html"
                              class="dropdown-item fade-page"
                            >
                              Portfolio
                            </a>
                            <a
                              href="home-saas.html"
                              class="dropdown-item fade-page"
                            >
                              SaaS
                            </a>
                            <a
                              href="home-saas-trend.html"
                              class="dropdown-item fade-page"
                            >
                              SaaS - Trend
                            </a>
                            <a
                              href="home-software-library.html"
                              class="dropdown-item fade-page"
                            >
                              Software Library
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        href="#"
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown-grid"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        Borrow Time
                      </a>
                      <div class="dropdown-menu row">
                        <div class="col-auto" data-dropdown-content>
                          <div class="dropdown-grid-menu">
                            <a
                              href="about-company.html"
                              class="dropdown-item fade-page"
                            >
                              About Company
                            </a>
                            <div class="dropdown">
                              <a
                                href="#"
                                class="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Careers</span>
                                <img
                                  class="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div class="dropdown-menu row">
                                <div class="col-auto" data-dropdown-content>
                                  <div class="dropdown-grid-menu">
                                    <a
                                      href="careers.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Careers
                                    </a>
                                    <a
                                      href="career-single.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Career Single
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="dropdown">
                              <a
                                href="#"
                                class="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Contact</span>
                                <img
                                  class="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div class="dropdown-menu row">
                                <div class="col-auto" data-dropdown-content>
                                  <div class="dropdown-grid-menu">
                                    <a
                                      href="contact.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Contact
                                    </a>
                                    <a
                                      href="contact-multiple-locations.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Contact - Multiple Locations
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="dropdown">
                              <a
                                href="#"
                                class="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Customers</span>
                                <img
                                  class="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div class="dropdown-menu row">
                                <div class="col-auto" data-dropdown-content>
                                  <div class="dropdown-grid-menu">
                                    <a
                                      href="customer-stories.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Customer Stories
                                    </a>
                                    <a
                                      href="customer-story.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Customer Story
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="dropdown">
                              <a
                                href="#"
                                class="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Knowledgebase</span>
                                <img
                                  class="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div class="dropdown-menu row">
                                <div class="col-auto" data-dropdown-content>
                                  <div class="dropdown-grid-menu">
                                    <a
                                      href="knowledgebase.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Knowledgebase
                                    </a>
                                    <a
                                      href="knowledgebase-category.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Knowledgebase Category
                                    </a>
                                    <a
                                      href="knowledgebase-article.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Knowledgebase Article
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="dropdown">
                              <a
                                href="#"
                                class="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Pricing</span>
                                <img
                                  class="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div class="dropdown-menu row">
                                <div class="col-auto" data-dropdown-content>
                                  <div class="dropdown-grid-menu">
                                    <a
                                      href="pricing-plans.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Pricing Plans
                                    </a>
                                    <a
                                      href="pricing-plans-table.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Pricing Plans Table
                                    </a>
                                    <a
                                      href="pricing-slider.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Pricing Slider
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="dropdown">
                              <a
                                href="#"
                                class="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Utility</span>
                                <img
                                  class="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div class="dropdown-menu row">
                                <div class="col-auto" data-dropdown-content>
                                  <div class="dropdown-grid-menu">
                                    <a
                                      href="404.html"
                                      class="dropdown-item fade-page"
                                    >
                                      404
                                    </a>
                                    <a
                                      href="utility-coming-soon-subscribe.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Coming Soon - Subscribe
                                    </a>
                                    <a
                                      href="utility-coming-soon.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Coming Soon
                                    </a>
                                    <a
                                      href="utility-confirmation-download.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Confirmation - Download
                                    </a>
                                    <a
                                      href="utility-confirmation-subscription.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Confirmation - Subscription
                                    </a>
                                    <a
                                      href="utility-legal.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Legal
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="dropdown">
                              <a
                                href="#"
                                class="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Account</span>
                                <img
                                  class="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div class="dropdown-menu row">
                                <div class="col-auto" data-dropdown-content>
                                  <div class="dropdown-grid-menu">
                                    <a
                                      href="account-onboarding.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Onboarding
                                    </a>
                                    <a
                                      href="account-sign-in.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Sign In
                                    </a>
                                    <a
                                      href="account-sign-up.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Sign Up
                                    </a>
                                    <a
                                      href="account-sign-up-image.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Sign Up Image
                                    </a>
                                    <a
                                      href="account-forgot-password.html"
                                      class="dropdown-item fade-page"
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
                    <li class="nav-item dropdown">
                      <a
                        href="#"
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown-grid"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        Make a Request to Borrow
                      </a>
                      <div class="dropdown-menu row">
                        <div class="col-auto" data-dropdown-content>
                          <div class="dropdown-grid-menu">
                            <div class="dropdown">
                              <a
                                href="#"
                                class="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Blog Layouts</span>
                                <img
                                  class="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div class="dropdown-menu row">
                                <div class="col-auto" data-dropdown-content>
                                  <div class="dropdown-grid-menu">
                                    <a
                                      href="blog-cards.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Blog Cards
                                    </a>
                                    <a
                                      href="blog-masonry.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Blog Masonry
                                    </a>
                                    <a
                                      href="blog-sidebar.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Blog Sidebar
                                    </a>
                                    <a
                                      href="blog-magazine.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Blog Magazine
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="dropdown">
                              <a
                                href="#"
                                class="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Article Layouts</span>
                                <img
                                  class="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div class="dropdown-menu row">
                                <div class="col-auto" data-dropdown-content>
                                  <div class="dropdown-grid-menu">
                                    <a
                                      href="blog-article.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Article Basic
                                    </a>
                                    <a
                                      href="blog-article-video.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Article Video
                                    </a>
                                    <a
                                      href="blog-article-image-header.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Article Image Header
                                    </a>
                                    <a
                                      href="blog-article-image-header-parallax.html"
                                      class="dropdown-item fade-page"
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
