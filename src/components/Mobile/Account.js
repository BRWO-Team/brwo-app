import React from 'react';
import { connect } from 'react-redux';
import { changeRoute } from '../../actions/router.action';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Slide from '@material-ui/core/Slide';

import ChevronLeft from '@material-ui/icons/ChevronLeft';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      selected: 'Menu'
    };
  }

  handleSelect = tab => {
    this.setState({ selected: tab });
  };
  render() {
    return (
      <div>
        {this.state.selected === 'Menu' && (
          <div>
            <Slide in={true} direction='left'>
              <List>
                <ListItem
                  button
                  onClick={() => this.handleSelect('My Listings')}
                >
                  <ListItemText inset primary='My Listings' />
                </ListItem>
                <ListItem button onClick={() => this.handleSelect('Settings')}>
                  <ListItemText inset primary='Settings' />
                </ListItem>
              </List>
            </Slide>
          </div>
        )}

        {this.state.selected === 'My Listings' && (
          <Slide in={true} direction='right'>
            <div>
              <ListItem button onClick={() => this.handleSelect('Menu')}>
                <ListItemIcon>
                  <ChevronLeft />
                </ListItemIcon>
              </ListItem>
            </div>
          </Slide>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {
  changeRoute
})(Account);

export { Account };
