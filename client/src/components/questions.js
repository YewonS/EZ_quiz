import React, { Component } from 'react';
import axios from 'axios';
import Question from './question';
import QuestionModal from './questionModal';

class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      modalInfo: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/questions').then(response => {
      this.setState({ questions: response.data });
    });
  }

  openModal = questionInfo => {
    this.setState({ modalInfo: questionInfo });
  };

  render() {
    return (
      <div>
        <h4>Questions</h4>
        <ul className='list-group'>
          {this.state.questions.map(question => (
            <Question
              handleQuestionPress={() => this.openModal(question)}
              key={question.id}
              name={question.question}
            />
          ))}
        </ul>

        <QuestionModal modalInfo={this.state.modalInfo} />
      </div>
    );
  }
}

export default Questions;
