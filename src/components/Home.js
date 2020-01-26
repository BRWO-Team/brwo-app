import React from 'react';
import Flickity from 'react-flickity-component';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import { connect } from 'react-redux';
import { getNItems, getMostRecentItems } from '../actions/items.action';
import { updateUser } from '../actions/firebase.action';

import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import Header from './Header';

import './Home.css';

const cardStyles = {
  card: {
    maxWidth: 345,
    minWidth: 200,
    marginRight: 10,
    marginTop: 30,
    marginBottom: 20,
    maxHeight: 300
  },
  media: {
    height: 140
  }
};

class MediaCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card style={cardStyles.card}>
          <CardActionArea>
            <CardMedia
              style={cardStyles.media}
              image={this.props.image}
              title={this.props.title}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {this.props.title}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {this.props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

const flickityOptions = {
  initialIndex: 0
};

class Carousel extends React.Component {
  render() {
    return (
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {this.props.items &&
          this.props.items.map((item, i) => {
            return (
              <MediaCard
                title={item.title}
                description={item.description}
                image={item.images[0]}
              />
            );
          })}
      </Flickity>
    );
  }
}

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
      <div className='root' style={{ backgroundColor: 'white' }}>
        <div className='filter-header'>
          <Header />
        </div>
        <Carousel items={this.props.items.current} />
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
