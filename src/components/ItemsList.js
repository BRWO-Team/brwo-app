import React from "react";

class ItemsList extends React.Component {
  render() {
    return (
      <div className="itemsList">
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col">
                <h2>Filtering</h2>
                <div className="row">
                  <div className="col">
                    <ul
                      data-isotope-filters
                      data-isotope-id="example-2"
                      className="nav mb-3"
                    >
                      <li className="nav-item">
                        <a href="#" className="nav-link active" data-filter="*">
                          All
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link" data-filter="Blue">
                          Blue
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link" data-filter="Pink">
                          Pink
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link" data-filter="Navy">
                          Navy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="row"
                  data-isotope-collection
                  data-isotope-id="example-2"
                >
                  <div data-isotope-item className="col-4" data-category="Blue">
                    <div className="card shadow-3d bg-primary min-vh-30">
                      <img src="https://cdn1.iconfinder.com/data/icons/education-259/100/education-19-512.png"></img>
                    </div>
                  </div>
                  <div data-isotope-item className="col-4" data-category="Blue">
                    <div className="card shadow-3d bg-primary min-vh-10"></div>
                  </div>
                  <div data-isotope-item className="col-4" data-category="Navy">
                    <div className="card shadow-3d bg-primary-3 min-vh-20"></div>
                  </div>
                  <div data-isotope-item className="col-4" data-category="Pink">
                    <div className="card shadow-3d bg-primary-2 min-vh-10"></div>
                  </div>
                  <div data-isotope-item className="col-4" data-category="Blue">
                    <div className="card shadow-3d bg-primary min-vh-10"></div>
                  </div>
                  <div data-isotope-item className="col-4" data-category="Navy">
                    <div className="card shadow-3d bg-primary-3 min-vh-30"></div>
                  </div>
                  <div data-isotope-item className="col-4" data-category="Pink">
                    <div className="card shadow-3d bg-primary-2 min-vh-20"></div>
                  </div>
                  <div data-isotope-item className="col-4" data-category="Navy">
                    <div className="card shadow-3d bg-primary-3 min-vh-20"></div>
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

export default ItemsList;
