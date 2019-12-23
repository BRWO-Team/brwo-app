import React from "react";

class AddForm extends React.Component {
  render() {
    return (
      <div className="add-form">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-8">
              <h2>Title</h2>
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="input-group-example-std"
                    aria-describedby="input-group-example-std"
                    placeholder={"What are you " + this.props.type + "?"}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-8">
              <h2>Description</h2>
              <form>
                <div class="form-group">
                  <label for="textarea-example-1">
                    {"Please provide a brief description of what you are " +
                      this.props.type}
                  </label>
                  <textarea
                    class="form-control"
                    id="textarea-example-1"
                    rows="3"
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="container add-form-section">
          <div className="row">
            <div className="col-xl-6 col-lg-8">
              <h2>Categories</h2>
              <form>
                <div className="custom-control custom-switch add-form-category-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch1"
                  />
                  <label className="custom-control-label" for="customSwitch1">
                    Book
                  </label>
                </div>
                <div className="custom-control custom-switch add-form-category-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch2"
                  />
                  <label className="custom-control-label" for="customSwitch2">
                    Sports Equipment
                  </label>
                </div>
                <div className="custom-control custom-switch add-form-category-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch3"
                  />
                  <label className="custom-control-label" for="customSwitch3">
                    Tool
                  </label>
                </div>
                <div className="custom-control custom-switch add-form-category-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch4"
                  />
                  <label className="custom-control-label" for="customSwitch4">
                    Miscellaneous
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-8">
              <h2>Price</h2>
              <form>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Amount (to the nearest dollar)"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text">.00</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddForm;

// category
// title
// description
// price
// images

// userid
