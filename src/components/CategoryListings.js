import React from 'react';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

import { connect } from 'react-redux';
// import { getCategories } from '../actions/items.action';

import withWidth from '@material-ui/core/withWidth';

import Carousel from './RecentListingsCarousel';

//http://127.0.0.1:5000/api/v1.0/item/category?category=books

class CategoryListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['books', 'everyday items', 'misc', 'sports', 'tools'],
      category: 'none',
      items: []
    };

    this.clickHandle = this.clickHandle.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(category) {
    axios
      .get(
        'http://127.0.0.1:5000/api/v1.0/item/category?category=' + category,
        {
          'Access-Control-Allow-Origin': '*'
        }
      )
      .then(res => {
        console.log(res);
        this.setState({ items: res.data.items });
      })
      .catch(error => {
        console.log(error);
      });
  }

  clickHandle(e) {
    // alert(e.target.innerText);
    this.setState({ category: e.target.innerText });
    this.fetchData(e.target.innerText);
  }

  render() {
    return (
      <div>
        {this.state.categories.map((item, i) => {
          return (
            <Chip
              label={item.toLocaleLowerCase()}
              clickable
              onClick={this.clickHandle}
              style={{
                backgroundColor: '#1976D2',
                color: 'white',
                margin: '5px'
              }}
            />
          );
        })}
        {this.state.items.length > 0 && <Carousel items={this.state.items} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default withWidth()(
  connect(mapStateToProps, {
    // getCategories
  })(CategoryListings)
);

export { CategoryListings };
