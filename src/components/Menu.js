import React from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  menuButton: {
    color: 'white'
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
        <MenuItem onClick={() => props.changeRoute('Home')}>Home</MenuItem>
        <MenuItem onClick={() => props.changeRoute('Add')}>
          List an Item
        </MenuItem>
        <MenuItem onClick={() => props.changeRoute('Favorites')}>
          Favorites
        </MenuItem>
        <MenuItem onClick={() => props.changeRoute('Account')}>
          My Account
        </MenuItem>
      </Menu>
    </div>
  );
}
