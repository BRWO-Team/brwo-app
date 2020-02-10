import React from 'react';
import { connect } from 'react-redux';
import { getNItems } from '../actions/items.action';
import { updateUser } from '../actions/firebase.action';

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Slide from '@material-ui/core/Slide';

import ItemDetail from './ItemDetail';

import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import './Feed.css';

class ItemsList extends React.Component {
  constructor(props) {
    super(props);
    window.scrollTo(0, 0);
    this.state = {
      item: null
    };
  }

  componentDidMount() {
    this.props.getNItems(21);
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
    console.log(key);
    let user = {
      favorites: [key],
      uid: this.props.firebase.user.uid
    };

    // this.updateUser(user);

    // if (this.props.firebase.user && this.props.firebase.user.favorites.includes(key)) {
    //   this.updateUser(key, this.props.firebase.user.uid);
    // } else remove key
  };

  getColor = item => {
    // if (this.props.firebase.favorites.includes(key)) return { color: 'red' };
    return { color: 'white' };
  };

  render() {
    return (
      <div className='root' style={{ backgroundColor: '#121212' }}>
        {!this.state.item && (
          <GridList
            spacing={1}
            cols={this.getGridListCols()}
            className='gridList'
          >
            {this.props.items &&
              this.props.items.current &&
              this.props.items.current.map((item, i) => {
                return (
                  <GridListTile cols={1} key={i}>
                    <img
                      onClick={() => this.openDetails(item)}
                      src={item.images[0]}
                      alt={item.title}
                    />
                    <GridListTileBar
                      title={item.title}
                      titlePosition='bottom'
                      actionIcon={
                        <IconButton style={this.getColor(item)}>
                          <FavoriteBorderIcon />
                        </IconButton>
                      }
                      actionPosition='right'
                      onClick={() => this.addToFavorites(item)}
                    />
                  </GridListTile>
                );
              })}
          </GridList>
        )}

        {this.state.item && (
          <Slide in={!!this.state.item} direction='left'>
            <Grid
              item
              xs={12}
              style={{ padding: '1em', backgroundColor: '#121212' }}
            >
              <ListItem button onClick={this.resetDetail}>
                <ListItemIcon style={{ color: '#BB86FC' }}>
                  <ChevronLeft />
                </ListItemIcon>
              </ListItem>
              <ItemDetail item={this.state.item} />
            </Grid>
          </Slide>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default withWidth()(
  connect(mapStateToProps, {
    getNItems,
    updateUser
  })(ItemsList)
);

export { ItemsList };
