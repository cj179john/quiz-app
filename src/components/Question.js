import React from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '@material-ui/icons/Home';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';
import {createStyles, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    questionBox: {
      padding: theme.spacing(8)
    },
    question: {
      border: 1
    },
    answer: {
      padding: theme.spacing(8)
    }
  })
);

function Question(props) {
  const {onAnswer, currentQuestion} = props;
  const classes = useStyles();

  return (
    <Grid
      container={true}
      spacing={3}
      className={classes.questionBox}
    >
      <Grid item={true} xs={12}>
        <Typography variant="h6">Activity Two / Round 1 </Typography>
      </Grid>
      <Grid item={true} xs={12}>
        <Typography variant="h4">Q1.</Typography>
      </Grid>
      <Grid item={true} xs={12} className={classes.question}>
        <h4 className="question">{currentQuestion.content}</h4>
      </Grid>
      <Grid container={true}>
        <Grid item={true} xs={6} >
          <Button onClick={onAnswer}>Correct</Button>
        </Grid>
        <Grid item={true} xs={6} onClick={onAnswer}>
        <Button onClick={onAnswer}>InCorrect</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

// Question.propTypes = {
//   content: PropTypes.string.isRequired
// };

export default Question;