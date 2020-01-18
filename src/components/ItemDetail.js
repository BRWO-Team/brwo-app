import React from 'react';
import { connect } from 'react-redux';

import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import './Feed.css';

class ItemDetail extends React.Component {
  render() {
    return (
      <div style={{ color: '#f2f2f2', paddingLeft: '4em' }}>
        <h2>{this.props.item.title}</h2>
        <img src={this.props.item.images[0]} alt={this.props.item.title} />
        <h4>{this.props.item.description}</h4>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default withWidth()(connect(mapStateToProps, {})(ItemDetail));

export { ItemDetail };
