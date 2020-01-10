import React from 'react';
class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <div className='mainDirect'>
          <section className='text-center' id='demos'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-xl-9'>
                  <h2 className='h1'>Join the shared economy!</h2>
                </div>
              </div>
            </div>
          </section>
          <section className='pt-0'>
            <div className='container'>
              <div className='row' data-aos='fade-up'>
                <div className='col-md-6'>
                  <a className='fade-page' href='home-coworking.html'>
                    <img
                      src='https://image.freepik.com/free-photo/relaxing-people-sharing-with-gadgets_23-2147745177.jpg'
                      alt='Coworking'
                      className='rounded shadow-3d hover-shadow-3d border mb-3 mb-md-0'
                    />
                  </a>
                </div>
                <div className='col'>
                  <div className='row justify-content-center'>
                    <div className='col-xl-9 col-lg-10'>
                      <a href='home-coworking.html' className='fade-up'>
                        <h3 className='h2'>Borrow Items</h3>
                      </a>
                      <p className='lead'>
                        Why buy an item you're going to use for a day when you
                        can borrow it for a fraction of the cost! Here are some
                        common items to borrow:
                      </p>
                      <ul className='list-unstyled my-3'>
                        <li className='d-flex align-items-center my-2'>
                          <img
                            className='icon icon-lg'
                            src='https://image.flaticon.com/icons/png/512/100/100852.png'
                            alt='icon'
                            data-inject-svg
                          />
                          <span className='h6 mb-0 ml-2'>Tools</span>
                        </li>
                        <li className='d-flex align-items-center my-2'>
                          <img
                            className='icon icon-lg'
                            src='https://cdn0.iconfinder.com/data/icons/school-39/100/Physical_Education-512.png'
                            alt='icon'
                            data-inject-svg
                          />
                          <span className='h6 mb-0 ml-2'>Sports Equipment</span>
                        </li>
                        <li className='d-flex align-items-center my-2'>
                          <img
                            className='icon icon-lg'
                            src='https://d29fhpw069ctt2.cloudfront.net/icon/image/39127/preview.png'
                            alt='icon'
                            data-inject-svg
                          />
                          <span className='h6 mb-0 ml-2'>Books</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='pt-0'>
            <div className='container'>
              <div className='row' data-aos='fade-up'>
                <div className='col-md-6'>
                  <a className='fade-page' href='home-mobile-app.html'>
                    <img
                      src='https://image.freepik.com/free-photo/people-hangout-together-coffee-shop_53876-16003.jpg'
                      alt='Mobile Application'
                      className='rounded shadow-3d hover-shadow-3d border mb-3 mb-md-0'
                    />
                  </a>
                </div>
                <div className='col'>
                  <div className='row justify-content-center'>
                    <div className='col-xl-9 col-lg-10'>
                      <a href='home-mobile-app.html' className='fade-up'>
                        <h3 className='h2'>Borrow Time</h3>
                      </a>
                      <p className='lead'>
                        Connect with subject and skill experts to pick their
                        brain and learn valuable skills. Common borrows inlcude:
                      </p>
                      <ul className='list-unstyled my-3'>
                        <li className='d-flex align-items-center my-2'>
                          <img
                            className='icon icon-lg'
                            src='https://cdn4.iconfinder.com/data/icons/personal-gym-coach/247/gym-partner-trainer-coach-001-512.png'
                            alt='icon'
                            data-inject-svg
                          />
                          <span className='h6 mb-0 ml-2'>Fitness</span>
                        </li>
                        <li className='d-flex align-items-center my-2'>
                          <img
                            className='icon icon-lg'
                            src='https://cdn4.iconfinder.com/data/icons/reputation-management-1/66/53-512.png'
                            alt='icon'
                            data-inject-svg
                          />
                          <span className='h6 mb-0 ml-2'>
                            Personal and professional development
                          </span>
                        </li>
                        <li className='d-flex align-items-center my-2'>
                          <img
                            className='icon icon-lg'
                            src='https://images.vexels.com/media/users/3/157318/isolated/preview/2782b0b66efa5815b12c9c637322aff3-desktop-computer-icon-computer-by-vexels.png'
                            alt='icon'
                            data-inject-svg
                          />
                          <span className='h6 mb-0 ml-2'>
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
          <section className='pt-0'>
            <div className='container'>
              <div className='row' data-aos='fade-up'>
                <div className='col-md-6'>
                  <a className='fade-page' href='home-course.html'>
                    <img
                      src='https://i.pinimg.com/originals/ef/56/c4/ef56c4413e7be9f14a13d2db2ad9ccc5.jpg'
                      alt='Online Course'
                      className='rounded shadow-3d hover-shadow-3d border mb-3 mb-md-0'
                    />
                  </a>
                </div>
                <div className='col'>
                  <div className='row justify-content-center'>
                    <div className='col-xl-9 col-lg-10'>
                      <a href='home-course.html' className='fade-up'>
                        <h3 className='h2'>Make a Quick Borrow Request</h3>
                      </a>
                      <p className='lead'>
                        Don't see what you want on the marketplace? Make a
                        request and nearby users will be notified that you're
                        looking for something.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
