import React from 'react';
import { connect } from 'react-redux';
import { changeRoute } from '../../actions/router.action';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddIcon from '@material-ui/icons/Add';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'recents'
    };
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <BottomNavigation
        className='bottom-nav'
        styles={{ width: '100%', position: 'fixed', bottom: 0 }}
        position='static'
        value={this.state.value}
        onChange={this.handleChange}
      >
        <BottomNavigationAction
          label='Home'
          value='home'
          icon={<Home />}
          onClick={() => this.props.changeRoute('Home')}
        />
        <BottomNavigationAction
          label='Borrow'
          value='borrow'
          icon={
            <FormatListBulletedIcon
              onClick={() => this.props.changeRoute('Borrow')}
            />
          }
        />
        <BottomNavigationAction
          label='Add'
          value='add'
          icon={<AddIcon onClick={() => this.props.changeRoute('Add')} />}
        />
        <BottomNavigationAction
          label='Favorites'
          value='favorites'
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label='Account'
          value='account'
          icon={
            <AccountCircleIcon
              onClick={() => this.props.changeRoute('Account')}
            />
          }
        />
      </BottomNavigation>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {
  changeRoute
})(Footer);

export { Footer };
