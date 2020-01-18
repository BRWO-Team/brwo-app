import React from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Slide from '@material-ui/core/Slide';

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ListIcon from '@material-ui/icons/List';
import SettingsIcon from '@material-ui/icons/Settings';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

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
      <div style={{ flexGrow: 1 }}>
        {this.state.selected === 'Menu' && (
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              style={{ paddingLeft: '2em', paddingTop: '2em' }}
            >
              <ListItem button onClick={() => this.handleSelect('My Listings')}>
                <ListItemIcon style={{ color: '#f2f2f2' }}>
                  <ListIcon />
                </ListItemIcon>
                <ListItemText
                  style={{ color: '#f2f2f2' }}
                  primary='My Listings'
                />
              </ListItem>
            </Grid>
            <Grid item xs={12} style={{ paddingLeft: '2em' }}>
              <ListItem button onClick={() => this.handleSelect('Settings')}>
                <ListItemIcon style={{ color: '#f2f2f2' }}>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText style={{ color: '#f2f2f2' }} primary='Settings' />
              </ListItem>
            </Grid>
          </Grid>
        )}
        {this.state.selected === 'My Listings' && (
          <Slide in={true} direction='right'>
            <div>
              <ListItem button onClick={() => this.handleSelect('Menu')}>
                <ListItemIcon style={{ color: '#BB86FC' }}>
                  <ChevronLeft />
                </ListItemIcon>
              </ListItem>
              <Grid item xs={12}>
                <div
                  style={{
                    color: '#f2f2f2',
                    paddingLeft: '5em'
                  }}
                >
                  Doesn't look like you have any listings yet
                </div>
              </Grid>
            </div>
          </Slide>
        )}
        {this.state.selected === 'Settings' && (
          <Slide in={true} direction='right'>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ListItem button onClick={() => this.handleSelect('Menu')}>
                  <ListItemIcon style={{ color: '#BB86FC' }}>
                    <ChevronLeft />
                  </ListItemIcon>
                  <ListItemText style={{ color: '#f2f2f2' }}>
                    Account
                  </ListItemText>
                </ListItem>
              </Grid>
              <Grid item xs={12}>
                <TableContainer style={{ padding: '2em' }}>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell
                          style={{ color: '#b3b3b3' }}
                          component='th'
                          scope='row'
                        >
                          Name
                        </TableCell>
                        <TableCell align='right' style={{ color: '#f2f2f2' }}>
                          {this.props.firebase.user.displayName}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          style={{ color: '#b3b3b3' }}
                          component='th'
                          scope='row'
                        >
                          Account Number
                        </TableCell>
                        <TableCell align='right' style={{ color: '#f2f2f2' }}>
                          {this.props.firebase.user.uid}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          style={{ color: '#b3b3b3' }}
                          component='th'
                          scope='row'
                        >
                          Email
                        </TableCell>
                        <TableCell align='right' style={{ color: '#f2f2f2' }}>
                          {this.props.firebase.user.email}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          style={{ color: '#b3b3b3' }}
                          component='th'
                          scope='row'
                        >
                          Address
                        </TableCell>
                        <TableCell align='right' style={{ color: '#f2f2f2' }}>
                          1234 Fake St, Farmville, PA 91210
                          <ChevronRight style={{ color: '#BB86FC' }} />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          style={{ color: '#b3b3b3' }}
                          component='th'
                          scope='row'
                        >
                          Phone Number
                        </TableCell>

                        <TableCell align='right' style={{ color: '#f2f2f2' }}>
                          666-420-6969
                          <ChevronRight style={{ color: '#BB86FC' }} />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Slide>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Account);

export { Account };
