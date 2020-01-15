import React from 'react';
import AddFormListing from './AddFormListing';
import { connect } from 'react-redux';
import { changeRoute } from '../../actions/router.action';
import { addItem } from '../../actions/items.action';

class AddFormControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingType: '',
      itemType: '',
      title: '',
      description: '',
      categories: [],
      price: 0,
      images: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit = () => {
    this.props.addItem({
      listingType: this.state.listingType,
      itemType: this.state.itemType,
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      date_time_added: Date(),
      test: true
    });
  };

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className='add-form-control'>
        <div className='container add-form-item'>
          <div className='row'>
            <div>
              <h3>Do you have it, or want it?</h3>
              <div className='form-group'>
                <div className='custom-control custom-radio mb-2'>
                  <input
                    type='radio'
                    id='listing-radio'
                    className='custom-control-input'
                    onChange={this.handleInputChange}
                    name='listingType'
                    value='Listing'
                  />
                  <label
                    className='custom-control-label'
                    htmlFor='listing-radio'
                  >
                    Listing
                  </label>
                </div>
                <div className='custom-control custom-radio'>
                  <input
                    type='radio'
                    id='requesting-radio'
                    className='custom-control-input'
                    onChange={this.handleInputChange}
                    name='listingType'
                    value='Request'
                  />
                  <label
                    className='custom-control-label'
                    htmlFor='requesting-radio'
                  >
                    Request
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div>
              <h3>Which type are you listing?</h3>
              <div className='form-group'>
                <div className='custom-control custom-radio mb-2'>
                  <input
                    type='radio'
                    id='item-radio'
                    className='custom-control-input'
                    onChange={this.handleInputChange}
                    name='itemType'
                    value='Good'
                  />
                  <label className='custom-control-label' htmlFor='item-radio'>
                    Good
                  </label>
                </div>
                <div className='custom-control custom-radio'>
                  <input
                    type='radio'
                    id='time-radio'
                    className='custom-control-input'
                    onChange={this.handleInputChange}
                    name='itemType'
                    value='Service'
                  />
                  <label className='custom-control-label' htmlFor='time-radio'>
                    Service
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.listingType === 'Listing' && (
          <AddFormListing
            type={this.state.listingType}
            handleChange={this.handleInputChange}
          />
        )}

        {this.state.listingType === 'Request' && 'This will be for Requesting'}

        <button
          type='submit'
          className='btn btn-primary back-btn'
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {
  changeRoute,
  addItem
})(AddFormControl);

export { AddFormControl };
