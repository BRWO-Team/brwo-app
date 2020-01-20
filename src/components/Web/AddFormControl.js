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
    this.handleImageSubmit = this.handleImageSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleImageSubmit(pictureFiles) {
    this.setState({
      images: pictureFiles
    });
  }

  handleSubmit = () => {
    this.props.addItem({
      listingType: this.state.listingType,
      itemType: this.state.itemType,
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      images: this.state.images,
      test: true
    });
  };

  // imageSubmit = image => {
  //   let data = new FormData();
  //   data.append('image', image, image.name);

  //   axios
  //     .post('http://127.0.0.1:5000/api/v1.0/items/submitimage', data, {
  //       headers: {
  //         accept: 'application/json',
  //         'Accept-Language': 'en-US,en;q=0.8',
  //         'Content-Type': `multipart/form-data; boundary=${data._boundary}`
  //       }
  //     })
  //     .then(response => {
  //       console.log(response.data.url);
  //       console.log(this.state.imageURLS);
  //       this.setState({
  //         imageURLS: this.state.imageURLS.push(response.data.url)
  //       });
  //       // return response.data.url;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

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
            handleImage={this.handleImageSubmit}
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
