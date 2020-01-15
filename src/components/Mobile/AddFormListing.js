import React from 'react';
import ImageUploader from 'react-images-upload';

class AddFormListing extends React.Component {
  render() {
    return (
      <div className='add-form add-form-item'>
        <div className='container '>
          <div className='row'>
            <div>
              <h3>Title</h3>
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
              <h3>Description</h3>
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

        <div className='container'>
          <div className='row'>
            <div>
              <h3>Price</h3>
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
            <h3>Add Images</h3>
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
