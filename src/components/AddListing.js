import React from 'react';

import { connect } from 'react-redux';

import { addItem } from '../actions/items.action';

import Button from '@material-ui/core/Button';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';
import Question from './Question';
import Slide from '@material-ui/core/Slide';

import ImageUploader from 'react-images-upload';

class AddListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          text: 'Select Category',
          options: ['Item', 'Service'],
          answer: ''
        },
        {
          text: 'Title for your item',
          answer: '',
          label: 'Title'
        },
        {
          text: 'Give some details',
          answer: ''
        },
        {
          text: 'Price',
          answer: ''
        }
      ],
      index: 0,
      images: [],
      completed: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
      images: this.state.images.concat(picture),
      index: 5
    });
  }

  handleChange = event => {
    let tempQuestions = [...this.state.questions];
    tempQuestions[this.state.index].answer = event.target.value;
    this.setState({ questions: tempQuestions });
    if (this.state.index === 0) this.nextQuestion();
  };

  handleBoolChange = event => {
    if (event.target.getAttribute('value') === '') {
      alert('...just answer the question');
      return;
    }
    let tempQuestions = [...this.state.questions];
    tempQuestions[this.state.index].answer = event.target.getAttribute('value');
    this.setState({ questions: tempQuestions });
    if (this.state.index === 0) this.nextQuestion();
  };

  nextQuestion = () => {
    if (!this.state.questions[this.state.index].answer)
      alert('Fill in required field');
    else this.setState({ index: this.state.index + 1 });
  };

  handleSubmit = () => {
    this.props.addItem({
      listingType: this.state.questions[0].answer,
      itemType: 'Item',
      title: this.state.questions[1].answer,
      description: this.state.questions[2].answer,
      price: this.state.questions[3].answer,
      date_time_added: Date(),
      test: true,
      user: this.props.firebase.user['uid'],
      images: this.state.images
    });
  };

  goBack = () => {
    this.setState({ index: this.state.index - 1 });
  };

  render() {
    return (
      <div>
        <Slide direction='right' in={true}>
          <div>
            <div style={{ minHeight: '3em' }}>
              {this.state.index > 0 && (
                <Button
                  style={{
                    color: '#d9d9d9',
                    marginLeft: '1em'
                  }}
                  onClick={this.goBack}
                >
                  <ChevronLeft style={{ color: '#BB86FC' }} />
                  {' back'}
                </Button>
              )}
            </div>

            {this.state.index < 4 && (
              <h4
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  color: '#d9d9d9'
                }}
              >
                {'Tell us about it'}
              </h4>
            )}
            {this.state.index === 5 && (
              <h4
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  color: '#d9d9d9',
                  paddingBottom: '2em'
                }}
              >
                {'Review your listing'}
              </h4>
            )}
          </div>
        </Slide>

        {this.state.index === 0 && (
          <Question
            question={this.state.questions[this.state.index]}
            handleChange={() => this.handleBoolChange}
          />
        )}
        {this.state.index === 1 && (
          <Question
            question={this.state.questions[this.state.index]}
            handleChange={() => this.handleChange}
            button={
              <Button onClick={this.nextQuestion}>
                <ChevronRight
                  value={this.state.myInput}
                  style={{ color: '#BB86FC' }}
                />
              </Button>
            }
          />
        )}
        {this.state.index === 2 && (
          <Question
            question={this.state.questions[this.state.index]}
            handleChange={() => this.handleChange}
            button={
              <Button onClick={this.nextQuestion}>
                <ChevronRight
                  value={this.state.myInput}
                  style={{ color: '#BB86FC' }}
                />
              </Button>
            }
          />
        )}
        {this.state.index === 3 && (
          <Question
            question={this.state.questions[this.state.index]}
            handleChange={() => this.handleChange}
            button={
              <Button onClick={this.nextQuestion}>
                <ChevronRight
                  value={this.state.myInput}
                  style={{ color: '#BB86FC' }}
                />
              </Button>
            }
          />
        )}
        {this.state.index === 4 && (
          <div>
            <ImageUploader
              withIcon={true}
              buttonText='Add some photos'
              onChange={this.onDrop}
              imgExtension={['.jpg', 'jpeg', '.gif', '.png']}
              maxFileSize={5242880}
            />
          </div>
        )}
        {this.state.index === 5 && (
          <div>
            <Grid container>
              {this.state.questions.map((item, y) => {
                return (
                  <React.Fragment>
                    <Grid
                      item
                      xs={6}
                      key={y}
                      style={{ color: '#f2f2f2', paddingLeft: '4em' }}
                    >
                      {item.text}
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      key={y}
                      style={{ color: '#f2f2f2', paddingBottom: '1em' }}
                    >
                      <input
                        value={item.answer}
                        color='white'
                        style={{
                          backgroundColor: '#666666',
                          color: '#d9d9d9',
                          width: '25%',
                          padding: '.5em',
                          fontSize: '1em'
                        }}
                      />
                    </Grid>
                  </React.Fragment>
                );
              })}
            </Grid>
            <Grid item xs={12} style={{ paddingLeft: '4em' }}>
              <Button
                style={{
                  color: '#d9d9d9',
                  marginLeft: '1em'
                }}
                onClick={this.handleSubmit}
              >
                Add Item
              </Button>
            </Grid>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {
  addItem
})(AddListing);

export { AddListing };
