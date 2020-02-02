import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const stepperStyles = {
  root: {
    width: '100%'
  },
  button: {
    marginTop: '20px',
    marginRight: '20px'
  },
  resetContainer: {
    padding: '20px'
  }
};

class InstructionStepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0
    };
  }

  getSteps() {
    return [
      'Find an item you want to list',
      'Add a listing on BRWO (click the plus button at the bottom of the page). Make sure to fill out all the details and add pictures',
      'Wait for someone to request to borrow your item',
      'Negiotiate the price with the interested borrower and set up the pickup and return time',
      'Profit!'
    ];
  }

  render() {
    const steps = this.getSteps();

    const handleNext = () => {
      this.setState({ step: this.state.step + 1 });
    };

    const handleBack = () => {
      this.setState({ step: this.state.step - 1 });
    };

    const handleReset = () => {
      this.setState({ step: 0 });
    };
    return (
      <Grid
        container
        justify='center'
        className='listingTypeRow'
        style={{ maxWidth: '300px', margin: 'auto' }}
      >
        <Stepper activeStep={this.state.step} orientation='vertical'>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <div style={stepperStyles.actionsContainer}>
                  <div>
                    {this.state.step > 0 && (
                      <Button
                        onClick={handleBack}
                        style={stepperStyles.button}
                        color='secondary'
                        variant='contained'
                      >
                        Back
                      </Button>
                    )}
                    {this.state.step < steps.length - 1 && (
                      <Button
                        variant='contained'
                        color='primary'
                        onClick={handleNext}
                        style={stepperStyles.button}
                      >
                        Next
                      </Button>
                    )}
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {this.state.step === steps.length - 1 && (
          <Paper square elevation={0}>
            <Typography variant='h6'>You're ready to list an item!</Typography>
          </Paper>
        )}
      </Grid>
    );
  }
}

export default InstructionStepper;
