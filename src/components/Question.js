import React from 'react';

import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class Question extends React.Component {
  getQuestion = () => {
    if (this.props.question) {
      if (this.props.question.options) {
        return (
          <Grid container>
            {this.props.question.options.map((item, y) => {
              return (
                <Grid item xs={6} key={y}>
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
      } else {
        return (
          <Grid container>
            <Grid item xs={12}>
              <TextField style={{ backgroundColor: '#d9d9d9' }} label='Title' />
            </Grid>
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
              <div>
                <Typography
                  variant='h4'
                  style={{ color: '#d9d9d9', fontFamily: 'Arial' }}
                  className='question-text'
                >
                  {this.props.question.text}
                </Typography>
                {this.getQuestion()}
              </div>
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
