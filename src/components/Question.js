import React from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Question(props) {
  return (
    <>
      <h2 className="question">Questions</h2>
      <Button component={Link} to="/"><HomeIcon/></Button>
    </>
  );
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;