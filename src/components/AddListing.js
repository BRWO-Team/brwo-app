import React from 'react';

import { connect } from 'react-redux';

import { addItem } from '../actions/items.action';

import Button from '@material-ui/core/Button';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
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
          answer: null
        },
        {
          text: 'Title for your item',
          answer: null,
          label: 'Title'
        },
        {
          text: 'Give some details',
          answer: null
        },
        {
          text: 'Price',
          answer: null
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
    if (!event.target.getAttribute('value')) {
      alert('...just answer the question');
      return;
    }
    let tempQuestions = [...this.state.questions];
    tempQuestions[this.state.index].answer = event.target.getAttribute('value');
    this.setState({ questions: tempQuestions, index: this.state.index + 1 });
  };

  handleSubmit = () => {
    this.props.addItem({
      listingType: this.state.listingType,
      itemType: this.state.itemType,
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      date_time_added: Date(),
      test: true,
      user: this.props.firebase.user
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
              <div
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  color: '#d9d9d9'
                }}
              >
                {'Tell us about it'}
              </div>
            )}
            {this.state.index === 5 && (
              <div
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  color: '#d9d9d9'
                }}
              >
                {'Review your listing'}
              </div>
            )}
          </div>
        </Slide>

        {this.state.index === 0 && (
          <Question
            question={this.state.questions[this.state.index]}
            handleChange={() => this.handleChange}
          />
        )}
        {this.state.index === 1 && (
          <Question
            question={this.state.questions[this.state.index]}
            handleChange={() => this.handleChange}
          />
        )}
        {this.state.index === 2 && (
          <Question
            question={this.state.questions[this.state.index]}
            handleChange={() => this.handleChange}
          />
        )}
        {this.state.index === 3 && (
          <Question
            question={this.state.questions[this.state.index]}
            handleChange={() => this.handleChange}
          />
        )}
        {/* {this.state.index === 4 && (
          <div>
            <ImageUploader
              withIcon={true}
              buttonText='Add some photos'
              onChange={this.onDrop}
              imgExtension={['.jpg', 'jpeg', '.gif', '.png']}
              maxFileSize={5242880}
            />
          </div>
        )} */}
        {this.state.index === 4 && (
          <div>
            {this.state.questions.map((item, y) => {
              return (
                <div style={{ color: '#f2f2f2', paddingLeft: '4em' }}>
                  {item.text + ': ' + item.answer}
                </div>
              );
            })}
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
