import React from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import Question from './Question';
import { Button } from '@material-ui/core';

function Questions(props) {
  return (
    <>
      <Question content="What is your favourite food?" />
      <Button component={Link} to="/"><HomeIcon/></Button>
    </>
  );
}

export default Questions;