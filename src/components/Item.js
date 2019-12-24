import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <div
        data-isotope-item
        className='col-4'
        data-category={this.props.category}
      >
        <div className='card'>
          <img
            src={this.props.image}
            alt={this.props.title}
            className='card-img-top'
          />

          <div
            className='card-body d-flex flex-column bg-blank'
            style={{ marginTop: '5px' }}
          >
            <div className='d-flex justify-content-between mb-3'>
              <div className='text-small d-flex'>
                <div style={{ color: this.props.category }} className='mr-2'>
                  {this.props.category}
                </div>
              </div>
            </div>

            <h4>{this.props.title}</h4>

            <p className='flex-grow-1'>{this.props.description}</p>
            <div className='d-flex align-items-center mt-3'>
              <div className='ml-1'>
                <span className='text-small text-muted'>By </span>
                <span className='text-small'>Username</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
