import React from 'react';
import { connect } from 'react-redux';

import { getNItems } from '../actions/items.action';

import Item from './Item';

class ItemsList extends React.Component {
  componentDidMount() {
    this.props.getNItems(10);
  }

  render() {
    return (
      <div className='itemsList'>
        <section>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col'>
                <div
                  className='row'
                  data-isotope-collection
                  data-isotope-id='example-2'
                >
                  {this.props.items &&
                    this.props.items.current &&
                    this.props.items.current.map((item, i) => {
                      return (
                        <Item
                          key={i}
                          color={'bg-primary'}
                          category={item.category}
                          title={item.title}
                          image={item.images[0]}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {
  getNItems
})(ItemsList);

export { ItemsList };
