import React from "react";

class MainDirect extends React.Component {
  render() {
    return (
      <div className="mainDirect">
        <section class="text-center" id="demos">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-9">
                <h2 class="h1">Join the shared economy!</h2>
              </div>
            </div>
          </div>
        </section>
        <section class="pt-0">
          <div class="container">
            <div class="row" data-aos="fade-up">
              <div class="col-md-6">
                <a class="fade-page" href="home-coworking.html">
                  <img
                    src="https://image.freepik.com/free-photo/relaxing-people-sharing-with-gadgets_23-2147745177.jpg"
                    alt="Coworking"
                    class="rounded shadow-3d hover-shadow-3d border mb-3 mb-md-0"
                  />
                </a>
              </div>
              <div class="col">
                <div class="row justify-content-center">
                  <div class="col-xl-9 col-lg-10">
                    <a href="home-coworking.html" class="fade-up">
                      <h3 class="h2">Borrow Items</h3>
                    </a>
                    <p class="lead">
                      Why buy an item you're going to use for a day when you can
                      borrow it for a fraction of the cost! Here are some common
                      items to borrow:
                    </p>
                    <ul class="list-unstyled my-3">
                      <li class="d-flex align-items-center my-2">
                        <img
                          class="icon icon-lg"
                          src="assets/img/icons/theme/home/clock.svg"
                          alt="icon"
                          data-inject-svg
                        />
                        <span class="h6 mb-0 ml-2">Tools</span>
                      </li>
                      <li class="d-flex align-items-center my-2">
                        <img
                          class="icon icon-lg"
                          src="assets/img/icons/theme/communication/rss.svg"
                          alt="icon"
                          data-inject-svg
                        />
                        <span class="h6 mb-0 ml-2">Sports Equipment</span>
                      </li>
                      <li class="d-flex align-items-center my-2">
                        <img
                          class="icon icon-lg"
                          src="assets/img/icons/theme/media/movie-lane-2.svg"
                          alt="icon"
                          data-inject-svg
                        />
                        <span class="h6 mb-0 ml-2">Books</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="pt-0">
          <div class="container">
            <div class="row" data-aos="fade-up">
              <div class="col-md-6">
                <a class="fade-page" href="home-mobile-app.html">
                  <img
                    src="https://image.freepik.com/free-photo/people-hangout-together-coffee-shop_53876-16003.jpg"
                    alt="Mobile Application"
                    class="rounded shadow-3d hover-shadow-3d border mb-3 mb-md-0"
                  />
                </a>
              </div>
              <div class="col">
                <div class="row justify-content-center">
                  <div class="col-xl-9 col-lg-10">
                    <a href="home-mobile-app.html" class="fade-up">
                      <h3 class="h2">Borrow Time</h3>
                    </a>
                    <p class="lead">
                      Connect with subject and skill experts to pick their brain
                      and learn valuable skills. Common borrows inlcude:
                    </p>
                    <ul class="list-unstyled my-3">
                      <li class="d-flex align-items-center my-2">
                        <img
                          class="icon icon-lg"
                          src="assets/img/icons/theme/devices/iphone-x.svg"
                          alt="icon"
                          data-inject-svg
                        />
                        <span class="h6 mb-0 ml-2">Fitness</span>
                      </li>
                      <li class="d-flex align-items-center my-2">
                        <img
                          class="icon icon-lg"
                          src="assets/img/icons/theme/media/movie-lane-2.svg"
                          alt="icon"
                          data-inject-svg
                        />
                        <span class="h6 mb-0 ml-2">
                          Personal and professional development
                        </span>
                      </li>
                      <li class="d-flex align-items-center my-2">
                        <img
                          class="icon icon-lg"
                          src="assets/img/icons/theme/layout/layout-arrange.svg"
                          alt="icon"
                          data-inject-svg
                        />
                        <span class="h6 mb-0 ml-2">
                          Financial, organization, and technical skills
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="pt-0">
          <div class="container">
            <div class="row" data-aos="fade-up">
              <div class="col-md-6">
                <a class="fade-page" href="home-course.html">
                  <img
                    src="https://i.pinimg.com/originals/ef/56/c4/ef56c4413e7be9f14a13d2db2ad9ccc5.jpg"
                    alt="Online Course"
                    class="rounded shadow-3d hover-shadow-3d border mb-3 mb-md-0"
                  />
                </a>
              </div>
              <div class="col">
                <div class="row justify-content-center">
                  <div class="col-xl-9 col-lg-10">
                    <a href="home-course.html" class="fade-up">
                      <h3 class="h2">Make a Quick Borrow Request</h3>
                    </a>
                    <p class="lead">
                      Don't see what you want on the marketplace? Make a request
                      and nearby users will be notified that you're looking for
                      something.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MainDirect;
