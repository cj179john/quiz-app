import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import {createStyles, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    questionBox: {
      padding: theme.spacing(8)
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
  const {onAnswer, currentQuestion, activity, round, endOfRound, moveToNextRound} = props;
  const classes = useStyles();
  const header = round ? `${activity.name} / ${round.title}` : activity.name;

  if (endOfRound) {
    return (
      <Grid
        container={true}
        spacing={8}
        className={classes.questionBox}
      >
      <Grid item={true} className={classes.option} xs={12}>
        <Button onClick={moveToNextRound}>Next Round</Button>
      </Grid>
    </Grid>
    );
  }
  return (
    <Grid
      container={true}
      spacing={8}
      className={classes.questionBox}
    >
      <Grid item={true} xs={12}>
        <Typography variant="h6">{header.toUpperCase()}</Typography>
      </Grid>
      <Grid item={true} xs={12}>
        <Typography variant="h5">Question {currentQuestion.order}.</Typography>
      </Grid>
      <Grid item={true} xs={12}>
        <Typography variant="h5" className="question">{currentQuestion.content}.</Typography>
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