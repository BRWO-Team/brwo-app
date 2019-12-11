import React from "react";

class ThemeTest extends React.Component {
  render() {
    return (
      <div>
        {/* <div class="loader">
          <div class="loading-animation"></div>
        </div> */}

        <div class="navbar-container ">
          <nav
            class="navbar navbar-expand-lg bg-white navbar-light"
            data-sticky="top"
          >
            <div class="container">
              <a class="navbar-brand fade-page" href="index.html">
                <img src="assets/img/logo.svg" alt="Leap" />
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
                        Demos
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
                        Pages
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
                        Blog
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
                    <li class="nav-item dropdown">
                      <a
                        href="#"
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown-grid"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        Portfolio
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
                                <span>Grid Layouts</span>
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
                                      href="portfolio-2-columns.html"
                                      class="dropdown-item fade-page"
                                    >
                                      2 Columns
                                    </a>
                                    <a
                                      href="portfolio-3-columns.html"
                                      class="dropdown-item fade-page"
                                    >
                                      3 Columns
                                    </a>
                                    <a
                                      href="portfolio-4-columns.html"
                                      class="dropdown-item fade-page"
                                    >
                                      4 Columns
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
                                <span>Project Layouts</span>
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
                                      href="portfolio-case-study.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Case Study
                                    </a>
                                    <a
                                      href="portfolio-single-sidebar.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Sidebar
                                    </a>
                                    <a
                                      href="portfolio-single-slider.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Slider
                                    </a>
                                    <a
                                      href="portfolio-single-parallax.html"
                                      class="dropdown-item fade-page"
                                    >
                                      Parallax
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
                        Elements
                      </a>
                      <div class="dropdown-menu bg-primary-3 text-light border-bottom">
                        <div class="container py-4" data-dropdown-content>
                          <div class="row">
                            <div class="col-lg col-md-4 mb-3 mb-lg-0">
                              <h5>Base</h5>
                              <div>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-grid.html"
                                >
                                  Grid
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-forms.html"
                                >
                                  Forms
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-tables.html"
                                >
                                  Tables
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-typography.html"
                                >
                                  Typography
                                </a>
                              </div>
                            </div>
                            <div class="col-lg col-md-4 mb-3 mb-lg-0">
                              <h5>General</h5>
                              <div>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-alerts.html"
                                >
                                  Alerts
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-avatars.html"
                                >
                                  Avatars
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-badges.html"
                                >
                                  Badges
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-breadcrumbs.html"
                                >
                                  Breadcrumbs
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-buttons.html"
                                >
                                  Buttons
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-cards.html"
                                >
                                  Cards
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-dropdowns-bootstrap.html"
                                >
                                  Dropdowns Bootstrap
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-dropdowns-grid.html"
                                >
                                  Dropdowns Grid
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-footers.html"
                                >
                                  Footers
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-navbars.html"
                                >
                                  Navigation
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-tooltips.html"
                                >
                                  Tooltips
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-toasts.html"
                                >
                                  Toasts
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-widgets.html"
                                >
                                  Widgets
                                </a>
                              </div>
                            </div>
                            <div class="col-lg col-md-4 mb-3 mb-lg-0">
                              <h5>Graphic</h5>
                              <div>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-decorations.html"
                                >
                                  Decorations
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-dividers.html"
                                >
                                  Dividers
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-icons.html"
                                >
                                  Icons
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-icons-reference.html"
                                >
                                  Icons Reference
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-processes.html"
                                >
                                  Processes
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-progress.html"
                                >
                                  Progress
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-pricing.html"
                                >
                                  Pricing
                                </a>
                              </div>
                            </div>
                            <div class="col-lg col-md-4 mb-3 mb-lg-0">
                              <h5>Media</h5>
                              <div>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-fancybox.html"
                                >
                                  Fancybox
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-isotope.html"
                                >
                                  Isotope
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-maps.html"
                                >
                                  Maps
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-flickity.html"
                                >
                                  Slider Flickity
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-twitter.html"
                                >
                                  Twitter Feeds
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-video-players.html"
                                >
                                  Video Players
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-video-backgrounds.html"
                                >
                                  Video Backgrounds
                                </a>
                              </div>
                            </div>
                            <div class="col-lg col-md-4 mb-3 mb-lg-0">
                              <h5>Interactive</h5>
                              <div>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-animations.html"
                                >
                                  Animations
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-accordions.html"
                                >
                                  Accordion
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-counters.html"
                                >
                                  Counters
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-countdown.html"
                                >
                                  Countdown
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-date-picker.html"
                                >
                                  Date Picker
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-modals.html"
                                >
                                  Modals
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-navs.html"
                                >
                                  Tabs (Nav)
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-typed-text.html"
                                >
                                  Typed Text
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-parallax.html"
                                >
                                  Parallax
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-popovers.html"
                                >
                                  Popovers
                                </a>
                                <a
                                  class="dropdown-item fade-page"
                                  href="elements-wizards.html"
                                >
                                  Wizards
                                </a>
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
                        Support
                      </a>
                      <div class="dropdown-menu row">
                        <div class="col-auto px-0" data-dropdown-content>
                          <div class="bg-white rounded border shadow-lg o-hidden">
                            <div class="p-3">
                              <h6 class="mb-0">Product Support</h6>
                            </div>
                            <div class="list-group list-group-flush">
                              <a
                                href="documentation/index.html"
                                target="_blank"
                                class="list-group-item list-group-item-action d-flex align-items-center p-3"
                              >
                                <img
                                  class="icon icon-md"
                                  src="assets/img/icons/theme/files/selected-file.svg"
                                  alt="selected-file icon"
                                  data-inject-svg
                                />
                                <div class="text-body ml-3">
                                  <span>Documentation</span>
                                  <div class="text-small text-muted">
                                    Get all the information you need
                                  </div>
                                </div>
                              </a>
                              <a
                                href="https://themes.zendesk.com/hc/en-us/articles/360000006291-How-do-I-get-help-with-the-theme-I-purchased-"
                                target="_blank"
                                class="list-group-item list-group-item-action d-flex align-items-center p-3"
                              >
                                <img
                                  class="icon icon-md"
                                  src="assets/img/icons/theme/communication/chat-4.svg"
                                  alt="chat-4 icon"
                                  data-inject-svg
                                />
                                <div class="text-body ml-3">
                                  <span>Looking for answers?</span>
                                  <div class="text-small text-muted">
                                    Get support
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <a href="#" class="btn btn-primary ml-lg-3">
                  Purchase Now
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default ThemeTest;
