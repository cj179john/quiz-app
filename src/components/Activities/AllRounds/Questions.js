import React, {useEffect, useState} from 'react';
import Question from '../../Question';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import {getRounds, getRoundQuestions, getQuestionCount} from './actions';
import {getActivities} from '../actions';
import {Typography} from '@material-ui/core';

function Questions(props) {
  const {
    questions,
    dispatch,
    questionIds,
    activity,
    currentRound,
    questionCount,
    moveToNextRound,
    setWaitForNextRound,
    setEndOfRound,
  } = props;

  const [currentQuestion, setCurrentQuestion] = useState(null);


  useEffect(() => {
    if (activity && currentRound) {
      dispatch(getRoundQuestions(activity.id, currentRound.order))
    }
  }, [dispatch, activity, currentRound]);

  useEffect(() => {
    if (questionIds && questionIds.length > 0) {
        setCurrentQuestion(questions[1]);
    }
  }, [questionIds, questions]);

  const onAnswer = () => {
    if (currentQuestion.order < questionIds.length) {
      const nextId = currentQuestion.order + 1;
      setCurrentQuestion(questions[nextId]);
    } else {
      setEndOfRound(true);
    }
  };

  if (currentQuestion === null) {
    return (
      <Grid container={true}>
        <Typography variant='h4'>Loading...</Typography>
      </Grid>
    )
  }


  console.log('currentRound: ', currentRound);
  console.log('currentQuestion:', currentQuestion);

  return (
    // <></>
    <Grid container={true}>
      <Grid item={true} xs={12}>
        <Question
          currentQuestion={currentQuestion}
          activity={activity}
          onAnswer={onAnswer}
          round={currentRound}
          // waitForNextRound={waitForNextRound}
          moveToNextRound={moveToNextRound}
        />
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  questions: state.withRounds.byOrder,
  questionIds: state.withRounds.allOrders,
  questionCount: state.withRounds.count
});

const mapDispatchToProps = (dispatch) => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);