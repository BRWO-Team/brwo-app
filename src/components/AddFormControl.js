import React from 'react';
import AddFormListing from './AddFormListing';
import AddFormRequest from './AddFormRequest';
import { connect } from 'react-redux';
import { changeRoute } from '../actions/router.action';

class AddFormControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { type: 'listing' };
    this.listingChanged = this.listingChanged.bind(this);
    this.requestChanged = this.requestChanged.bind(this);
  }

  listingChanged() {
    this.setState({
      type: 'listing'
    });
  }

  requestChanged() {
    this.setState({
      type: 'requesting'
    });
  }

  render() {
    let type;
    if (this.state.type == 'listing') {
      type = <AddFormListing type={this.state.type} />;
    } else if (this.state.type == 'requesting') {
      type = <AddFormRequest type={this.state.type} />;
    }

    return (
      <div className='add-form-control'>
        <div className='container'>
          <div className='row'>
            <div>
              <h2>Item or Time</h2>
              <form>
                <div className='form-group'>
                  <div className='custom-control custom-radio mb-2'>
                    <input
                      type='radio'
                      id='item-radio'
                      name='custom-radio'
                      className='custom-control-input'
                    />
                    <label className='custom-control-label' for='item-radio'>
                      Item
                    </label>
                  </div>
                  <div className='custom-control custom-radio'>
                    <input
                      type='radio'
                      id='time-radio'
                      name='custom-radio'
                      className='custom-control-input'
                    />
                    <label className='custom-control-label' for='time-radio'>
                      Time
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='row'>
            <div>
              <h2>List or Request</h2>
              <form>
                <div className='form-group'>
                  <div className='custom-control custom-radio mb-2'>
                    <input
                      onChange={this.listingChanged}
                      type='radio'
                      id='custom-radio-example-1'
                      name='custom-radio'
                      className='custom-control-input'
                    />
                    <label
                      className='custom-control-label'
                      for='custom-radio-example-1'
                    >
                      Listing
                    </label>
                  </div>
                  <div className='custom-control custom-radio'>
                    <input
                      onChange={this.requestChanged}
                      type='radio'
                      id='custom-radio-2'
                      name='custom-radio'
                      className='custom-control-input'
                    />
                    <label
                      className='custom-control-label'
                      for='custom-radio-2'
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

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {
  changeRoute
})(AddFormControl);

export { AddFormControl };
