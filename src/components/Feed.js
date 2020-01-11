import React from 'react';
import { connect } from 'react-redux';
import { getNItems } from '../actions/items.action';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import './Feed.css';

class ItemsList extends React.Component {
  constructor(props) {
    super(props);
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    this.props.getNItems(12);
  }

  render() {
    return (
      <div className='root'>
        <GridList spacing={1} className='gridList'>
          {this.props.items &&
            this.props.items.current &&
            this.props.items.current.map((item, i) => {
              return (
                <GridListTile cols={i % 3 ? 1 : 2} rows={i % 3 ? 1 : 2} key={i}>
                  <img src={item.images[0]} alt={item.title} />
                  <GridListTileBar
                    title={item.title}
                    subtitle={<span>{item.description}</span>}
                    actionIcon={
                      <IconButton
                        aria-label={`info about ${item.title}`}
                        className='icon'
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
              );
            })}
        </GridList>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {
  getNItems
})(ItemsList);

export { ItemsList };
