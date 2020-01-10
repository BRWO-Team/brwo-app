import React from 'react';
import ImageUploader from 'react-images-upload';

class AddFormListing extends React.Component {
  render() {
    return (
      <div className='add-form add-form-item'>
        <div className='container '>
          <div className='row'>
            <div>
              <h2>Title</h2>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control add-title'
                  id='input-group-example-std'
                  aria-describedby='input-group-example-std'
                  placeholder={'What are you ' + this.props.type + '?'}
                  onBlur={this.props.handleChange}
                  name='title'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div>
              <h2>Description</h2>
              <div className='form-group'>
                <label htmlFor='textarea-example-1'>
                  {'Please provide a brief description of what you are ' +
                    this.props.type}
                </label>
                <textarea
                  className='form-control'
                  id='textarea-example-1'
                  rows='3'
                  onBlur={this.props.handleChange}
                  name='description'
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className='container add-form-section'>
          <div className='row'>
            <div>
              <h2>Categories</h2>
              <div className='custom-control custom-switch add-form-category-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='customSwitch1'
                />
                <label className='custom-control-label' htmlFor='customSwitch1'>
                  Book
                </label>
              </div>
              <div className='custom-control custom-switch add-form-category-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='customSwitch2'
                />
                <label className='custom-control-label' htmlFor='customSwitch2'>
                  Sports Equipment
                </label>
              </div>
              <div className='custom-control custom-switch add-form-category-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='customSwitch3'
                />
                <label className='custom-control-label' htmlFor='customSwitch3'>
                  Tool
                </label>
              </div>
              <div className='custom-control custom-switch add-form-category-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='customSwitch4'
                />
                <label className='custom-control-label' htmlFor='customSwitch4'>
                  Miscellaneous
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div>
              <h2>Price</h2>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>$</span>
                </div>
                <input
                  type='text'
                  className='form-control'
                  aria-label='Amount (to the nearest dollar)'
                  onBlur={this.props.handleChange}
                  name='price'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <h2>Add Images</h2>
            <ImageUploader
              withIcon={false}
              buttonText='Choose images'
              onChange={this.onDrop}
              imgExtension={['.jpg', '.gif', '.png']}
              maxFileSize={5242880}
              withPreview={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AddFormListing;

// categories
// title
// description
// price
// images
// location/zipcode

// userid
