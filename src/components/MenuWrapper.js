import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeRoute } from '../actions/router.action';
import { signout } from '../actions/firebase.action';

import CoolMenu from './Menu';

class MenuBar extends Component {
  render() {
    return (
      <div>
        <CoolMenu
          changeRoute={this.props.changeRoute}
          signout={this.props.signout}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, { changeRoute, signout })(MenuBar);

export { MenuBar };
