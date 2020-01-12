import React from 'react';

import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';

class Question extends React.Component {
  getQuestion = () => {
    if (this.props.question) {
      if (this.props.question.options) {
        return (
          <Grid container>
            {this.props.question.options.map(item => {
              return (
                <Grid item xs={6}>
                  <Button
                    value={item}
                    variant='contained'
                    className='question'
                    onClick={this.props.handleChange(item)}
                  >
                    {item}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        );
      }
    }
  };
  render() {
    return (
      <div className='question-container'>
        <Slide direction='right' in={true}>
          <div>
            {this.props.question && (
              <Paper className='paper' elevation={3}>
                <Typography variant='h4' className='question-text'>
                  {this.props.question.text}
                </Typography>
                {this.getQuestion()}
              </Paper>
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
