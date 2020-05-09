import React, {useEffect, useState} from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import Question from '../../Question';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import {getQuestions, getRounds, getRoundQuestions} from './actions';
import {getActivities} from '../actions';
import { Typography, makeStyles } from '@material-ui/core';
import Result from '../../Result';

const useStyles = makeStyles(theme => ({
    homeIcon: {
      marginLeft: '50%'
    }
  })
);

function WithRounds(props) {
  const {match, questions, dispatch, questionIds, activities, rounds, roundIds} = props;

  const classes = useStyles();
  const id = match.params.id;
  const [currentRound, setCurrentRound] = useState(null);
  const [currentRoundId, setCurrentRoundId] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentId, setCurrentId] = useState(1);
  let activity = activities[id];

  useEffect(() => {
    dispatch(getActivities());
    if (!activity) {
      activity = activities[id];
    }
    dispatch(getRounds(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (roundIds && roundIds.length > 0) {
      setCurrentRound(rounds[currentRoundId]);
    }
  }, [roundIds]);

  useEffect(() => {
    dispatch(getRoundQuestions(id, currentRoundId))
  }, [currentRound]);

  useEffect(() => {
    if (questionIds && questionIds.length > 0) {
      setCurrentQuestion(questions[currentId]);
    }
  }, [questionIds]);

  const onAnswer = () => {
    if (currentId <= questionIds.length) {
      setCurrentId(currentId + 1);
      setCurrentQuestion(questions[currentId + 1]);
    }
  };

  if (currentQuestion === null) {
    return (
      <Grid container={true}>
        <Typography variant='h4'>Loading...</Typography>
      </Grid>
    )
  }

  if (currentId > questionIds.length) {
    return (
      <Result questions={questions} activity={activity} />
    );
  }

  return (
    <Grid container={true}>
      <Grid item={true} xs={12}>
        <Question currentQuestion={currentQuestion} activity={activity} onAnswer={onAnswer} round={currentRound}/>
      </Grid>
      <Grid item={true} xs={12} className={classes.homeIcon}>
        <Button component={Link} to="/"><HomeIcon/></Button>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  questions: state.withRounds.byOrder,
  questionIds: state.withRounds.allOrders,
  activities: state.activities.byId,
  rounds: state.withRounds.roundByOrder,
  roundIds: state.withRounds.roundOrders,
});

const mapDispatchToProps = (dispatch) => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(WithRounds);