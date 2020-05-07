import React from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import Question from './Question';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function Questions(props) {
  return (
    <Grid container={true}>
      <Grid item={true} xs={12}>
        <Question content="What is your favourite food?" />
      </Grid>
      <Grid item={true} xs={12} alignItems='center'>
        <Button component={Link} to="/"><HomeIcon/></Button>
      </Grid>

    </Grid>
  );
}

export default Questions;