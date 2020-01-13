import React from 'react';
import { connect } from 'react-redux';
import { getNItems } from '../actions/items.action';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import Header from './Header';

import './Feed.css';

class ItemsList extends React.Component {
  constructor(props) {
    super(props);
    window.scrollTo(0, 0);
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

  // cols={i % 3 ? 1 : 2} rows={i % 3 ? 1 : 2}

  render() {
    return (
      <div className='root'>
        <div className='filter-header'>
          <Header />
        </div>

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
                  <img src={item.images[0]} alt={item.title} />
                  <GridListTileBar title={item.title} />
                </GridListTile>
              );
            })}
        </GridList>
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
