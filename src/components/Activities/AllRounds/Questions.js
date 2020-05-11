import React, {useEffect, useState} from 'react';
import Question from '../../Question';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import {getRoundQuestions} from './actions';
import {addProcessedQuestion} from '../actions';
import {Typography} from '@material-ui/core';

function Questions(props) {
  const {
    questions,
    dispatch,
    questionIds,
    activity,
    currentRound,
    moveToNextRound,
    endOfRound,
    setEndOfRound,
  } = props;

  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    dispatch(addProcessedQuestion(currentQuestion));
  }, [dispatch, currentQuestion]);

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
      console.log('setEndofRound to be true');

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

  return (
    <Grid container={true}>
      <Grid item={true} xs={12}>
        <Question
          currentQuestion={currentQuestion}
          activity={activity}
          onAnswer={onAnswer}
          round={currentRound}
          endOfRound={endOfRound}
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