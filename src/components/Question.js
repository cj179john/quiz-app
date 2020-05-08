import React from 'react';
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
    },
    option: {
      textAlign: 'center'
    }
  })
);

function Question(props) {
  const {onAnswer, currentQuestion, activity, round} = props;
  const classes = useStyles();
  const header = round ? `${activity.name} / ${round.name}` : activity.name;

  return (
    <Grid
      container={true}
      spacing={3}
      className={classes.questionBox}
    >
      <Grid item={true} xs={12}>
        <Typography variant="h6">{header}</Typography>
      </Grid>
      <Grid item={true} xs={12}>
        <Typography variant="h4">Question {currentQuestion.order}</Typography>
      </Grid>
      <Grid item={true} xs={12} className={classes.question}>
        <h4 className="question">{currentQuestion.content}</h4>
      </Grid>
      <Grid item={true} xs={6} className={classes.option}>
        <Button onClick={onAnswer}>Correct</Button>
      </Grid>
      <Grid item={true} xs={6} className={classes.option}>
        <Button onClick={onAnswer}>InCorrect</Button>
      </Grid>
    </Grid>
  );
}

export default Question;