import React from 'react';

import { connect } from 'react-redux';

import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';

import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myInput: null
    };

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange = event => {
    this.setState({ myInput: event.target.value });
  };

  getQuestion = () => {
    if (this.props.question) {
      if (this.props.question.options) {
        return (
          <React.Fragment>
            {this.props.question.options.map((item, y) => {
              return (
                <ListItem
                  button
                  key={y}
                  value={item}
                  style={{
                    color: '#d9d9d9',
                    textAlign: 'left',
                    justifyContent: 'left'
                  }}
                  onClick={this.props.handleChange()}
                >
                  {item}
                </ListItem>
              );
            })}
          </React.Fragment>
        );
      } else {
        return (
          <Grid container>
            <Grid item xs={12}>
              <input
                onChange={this.props.handleChange()}
                color='white'
                style={{
                  backgroundColor: '#666666',
                  color: '#d9d9d9',
                  width: '25%',
                  padding: '.5em',
                  fontSize: '1em'
                }}
              />
              {this.props.button}
            </Grid>
          </Grid>
        );
      }
    }
  };
  render() {
    return (
      <div>
        <Slide direction='right' in={true}>
          <div>
            {this.props.question && (
              <Grid
                container
                direction='row'
                alignItems='center'
                style={{ paddingLeft: '1em' }}
              >
                <Grid item>
                  <Typography
                    style={{
                      color: '#d9d9d9',
                      display: 'inline',
                      paddingRight: '.5em'
                    }}
                    variant='overline'
                  >
                    {this.props.question.text}
                  </Typography>
                </Grid>
                <Grid
                  item
                  style={{
                    color: '#BB86FC',
                    display: 'inline'
                  }}
                >
                  <HelpOutlineIcon />
                </Grid>

                {this.getQuestion()}
              </Grid>
            )}
          </div>
        </Slide>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {})(Question);

export { Question };
