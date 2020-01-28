import React from 'react';

import Typography from '@material-ui/core/Typography';

import Jumbotron from 'react-bootstrap/Jumbotron';

import { connect } from 'react-redux';
import { getNItems, getMostRecentItems } from '../actions/items.action';
import { updateUser } from '../actions/firebase.action';

import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import Header from './Header';
import Carousel from './RecentListingsCarousel';
import ListingTypes from './ListingTypes';

import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    window.scrollTo(0, 0);
    this.state = {
      item: null
    };
  }

  componentDidMount() {
    this.props.getNItems(5);
  }

  getGridListCols = () => {
    if (this.props.width === 'xs' && isWidthUp('xs;', this.props.width)) {
      return 2;
    }
    if (this.props.width === 'sm' && isWidthUp('sm;', this.props.width)) {
      return 3;
    }
    if (this.props.width === 'md' && isWidthUp('md;', this.props.width)) {
      return 3;
    }
    if (this.props.width === 'lg' && isWidthUp('xs;', this.props.width)) {
      return 3;
    }
    if (this.props.width === 'xl' && isWidthUp('xs;', this.props.width)) {
      return 3;
    }

    return 1;
  };

  openDetails = item => {
    this.setState({ item: item });
  };

  resetDetail = () => {
    this.setState({ item: null });
  };

  addToFavorites = key => {
    if (this.props.firebase.favorites.includes(key)) {
      this.updateUser(key, this.props.firebase.user.uid);
    }
  };

  getColor = item => {
    return { color: 'white' };
  };

  render() {
    return (
      <div
        className='root'
        // style={{ backgroundColor: 'white' }}
      >
        <div className='filter-header'>
          <Header />
        </div>

        <Jumbotron style={{ textAlign: 'center' }}>
          <Typography variant='h4' style={{ fontFamily: 'Roboto, sans-serif' }}>
            Check out some recently listed items!
          </Typography>
          <Carousel items={this.props.items.current} />
        </Jumbotron>

        <ListingTypes />
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default withWidth()(
  connect(mapStateToProps, {
    getNItems,
    getMostRecentItems,
    updateUser
  })(Home)
);

export { Home };
