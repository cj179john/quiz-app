import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
  return (
    <h2 className="question">Hello world</h2>
  );
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;