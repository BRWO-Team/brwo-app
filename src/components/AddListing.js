import React from 'react';

import { connect } from 'react-redux';

import { addItem } from '../actions/items.action';

import Question from './Question';

class AddListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          text: 'Category?',
          options: ['Item', 'Service'],
          answer: null
        },
        {
          text: 'Title?',
          answer: null
        },
        {
          text: 'Description?',
          answer: null
        },
        {
          text: 'Price?',
          answer: null
        }
      ],
      index: 0,
      listingType: '',
      itemType: '',
      title: '',
      description: '',
      categories: [],
      price: 0,
      images: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    let tempQuestions = [...this.state.questions];
    tempQuestions[this.state.index].answer = event.target.value;
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

  render() {
    return (
      <div>
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
        {this.state.index === 4 && (
          <Question
            question={this.state.questions[this.state.index]}
            handleChange={() => this.handleChange}
          />
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
