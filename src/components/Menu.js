import React from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  menuButton: {
    color: 'black',
    backgroundColor: 'white'
  }
}));

export default function CoolMenu(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id='icon-button'
        className={classes.menuButton}
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => props._changeRoute('Home')}>Home</MenuItem>

        <MenuItem onClick={() => props._changeRoute('Borrow')}>Borrow</MenuItem>
        {props._user && (
          <MenuItem onClick={() => props._changeRoute('Add')}>Sell</MenuItem>
        )}
        {props._user && (
          <MenuItem onClick={() => props._changeRoute('My Profile')}>
            My Profile
          </MenuItem>
        )}
        {props._user ? (
          <MenuItem onClick={() => props._signout()}>Logout</MenuItem>
        ) : (
          <MenuItem onClick={() => props._setLogin(true)}>Login</MenuItem>
        )}
      </Menu>
    </div>
  );
}
