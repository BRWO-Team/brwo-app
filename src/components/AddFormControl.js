import React from "react";
import AddForm from "../components/AddForm";

class AddFormControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { type: "listing" };
  }
  render() {
    let type;
    if (this.state.type == "listing") {
      type = <AddForm type={this.state.type}/>;
    } else {
      type = "";
    }
    return (
      <div className="add-form-control">
        <div className="container add-form-section">
          <div className="row">
            <div className="col-xl-6 col-lg-8">
              <h2>List or Request</h2>
              <form>
                <div className="form-group">
                  <div className="custom-control custom-radio mb-2">
                    <input
                      type="radio"
                      id="custom-radio-example-1"
                      name="custom-radio"
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      for="custom-radio-example-1"
                    >
                      Listing
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      id="custom-radio-2"
                      name="custom-radio"
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      for="custom-radio-2"
                    >
                      Requesting
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {type}
      </div>
    );
  }
}

export default AddFormControl;
