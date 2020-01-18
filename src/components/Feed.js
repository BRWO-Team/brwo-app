import React from 'react';
import { connect } from 'react-redux';
import { getNItems } from '../actions/items.action';

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Slide from '@material-ui/core/Slide';

import ItemDetail from './ItemDetail';

import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import Header from './Header';

import './Feed.css';
import { Typography } from '@material-ui/core';

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
    console.log(item);
    this.setState({ item: item });
  };

  resetDetail = () => {
    this.setState({ item: null });
  };

  render() {
    return (
      <div className='root' style={{ backgroundColor: '#121212' }}>
        <div className='filter-header'>
          <Header />
        </div>

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
                  <GridListTile
                    cols={1}
                    key={i}
                    onClick={() => this.openDetails(item)}
                  >
                    <img src={item.images[0]} alt={item.title} />
                    <GridListTileBar title={item.title} />
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
              {/* <div style={{ color: '#f2f2f2', paddingLeft: '4em' }}>
                <h2>{this.state.item.title}</h2>
                <img
                  src={this.state.item.images[0]}
                  alt={this.state.item.title}
                />
                <h4>{this.state.item.description}</h4>
              </div> */}
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
    getNItems
  })(ItemsList)
);

export { ItemsList };
