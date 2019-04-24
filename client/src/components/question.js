import React from 'react';

const Question = props => (
  <li
    onClick={props.handleQuestionPress}
    className='list-group-item list-group-item-action'
    data-toggle='modal'
    data-target='#questionModal'
  >
    {props.name}
  </li>
);

export default Question;
