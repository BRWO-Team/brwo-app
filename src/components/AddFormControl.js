import React from 'react';
import AddFormListing from './AddFormListing';
import AddFormRequest from './AddFormRequest';
import { connect } from 'react-redux';
import { changeRoute } from '../actions/router.action';

class AddFormControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingType: 'listing',
      itemType: '',
      title: '',
      description: '',
      categories: [],
      price: 0,
      images: [],
      latitude: '',
      longitude: '',
      zipCode: '',
      userId: '',
      date_time_added: ''
    };
    this.listingChanged = this.listingChanged.bind(this);
    this.requestChanged = this.requestChanged.bind(this);
    this.captureData = this.captureData.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  captureData(inputType, data) {
    alert(inputType);
    switch (inputType) {
      case 'title':
        this.setState({ title: data });
        break;
    }
  }

  listingChanged() {
    this.setState({
      listingType: 'listing'
    });
  }

  requestChanged() {
    this.setState({
      listingType: 'requesting'
    });
  }

  submitHandler = event => {
    event.preventDefault();
    // alert('You are submitting');
    console.log(event);

    fetch(
      'https://cors-anywhere.herokuapp.com/https://api-dot-pacific-plating-262123.appspot.com/api/v1.0/items/categories',
      {
        method: 'GET'
      }
    )
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        console.log(jsonData);
      });

    fetch(
      'https://cors-anywhere.herokuapp.com/https://api-dot-pacific-plating-262123.appspot.com/api/v1.0/items/postnew',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          listingType: this.state.listingType,
          itemType: this.state.itemType,
          title: this.state.title,
          description: this.state.description,
          price: this.state.price,
          date_time_added: Date(),
          test: 'yes'
        })
      }
    );
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const id = target.id;
    const name = target.name;
    console.log('value: ' + value);
    console.log('id: ' + id);
    console.log('name: ' + name);

    switch (id) {
      case 'item-radio':
        this.setState({ [name]: 'item' }, () => {
          console.log(this.state);
        });
        break;
      case 'time-radio':
        this.setState({ [name]: 'time' }, () => {
          console.log(this.state);
        });
        break;
      case 'requesting-radio':
        this.setState({ [name]: 'requesting' }, () => {
          console.log(this.state);
        });
        break;
      case 'listing-radio':
        this.setState({ [name]: 'listing' }, () => {
          console.log(this.state);
        });
        break;
      case 'title':
        this.setState({ [name]: 'test' }, () => {
          console.log(this.state);
        });
        break;
      default:
        this.setState({ [name]: value }, () => {
          console.log(this.state);
        });
        break;
    }

    // this.setState({
    //   [name]: value
    // });
    // console.log(this.state);
  }

  render() {
    let type;
    if (this.state.listingType == 'listing') {
      type = (
        <AddFormListing
          type={this.state.listingType}
          handleChange={this.handleInputChange}
        />
      );
    } else if (this.state.listingType == 'requesting') {
      type = (
        <h1>This will be the listing form</h1>
        // <AddFormRequest
        //   type={this.state.listingType}
        //   handleChange={this.handleInputChange}
        // />
      );
    }

    return (
      <div className='add-form-control'>
        <form onSubmit={this.submitHandler} method='POST'>
          <div className='container add-form-item'>
            <div className='row'>
              <div>
                <h2>Item or Time</h2>

                <div className='form-group'>
                  <div className='custom-control custom-radio mb-2'>
                    <input
                      type='radio'
                      id='item-radio'
                      className='custom-control-input'
                      onChange={this.handleInputChange}
                      name='itemType'
                    />
                    <label
                      className='custom-control-label'
                      htmlFor='item-radio'
                    >
                      Item
                    </label>
                  </div>
                  <div className='custom-control custom-radio'>
                    <input
                      type='radio'
                      id='time-radio'
                      className='custom-control-input'
                      onChange={this.handleInputChange}
                      name='itemType'
                    />
                    <label
                      className='custom-control-label'
                      htmlFor='time-radio'
                    >
                      Time
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div>
                <h2>List or Request</h2>
                <div className='form-group'>
                  <div className='custom-control custom-radio mb-2'>
                    <input
                      // onChange={this.listingChanged}
                      type='radio'
                      id='listing-radio'
                      className='custom-control-input'
                      onChange={this.handleInputChange}
                      name='listingType'
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
                      // onChange={this.requestChanged}
                      type='radio'
                      id='requesting-radio'
                      className='custom-control-input'
                      onChange={this.handleInputChange}
                      name='listingType'
                    />
                    <label
                      className='custom-control-label'
                      htmlFor='requesting-radio'
                    >
                      Requesting
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {type}
          <button type='submit' className='btn btn-primary back-btn'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {
  changeRoute
})(AddFormControl);

export { AddFormControl };
