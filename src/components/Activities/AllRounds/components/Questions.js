import React, {useEffect, useState} from 'react';
import Question from '../../../Question';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import {getRoundQuestions} from '../actions';
import {addProcessedQuestion} from '../../actions';
import {Typography} from '@material-ui/core';

function Questions(props) {
  const {
    questions,
    dispatch,
    questionIds,
    activity,
    currentRound,
    setEndOfRound,
  } = props;

  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    if (activity && currentRound) {
      dispatch(getRoundQuestions(activity.id, currentRound.order))
    }
  }, [dispatch, activity, currentRound]);

  useEffect(() => {
      setCurrentQuestion(questions[1] || null);
  }, [questions]);

  useEffect(() => {
    dispatch(addProcessedQuestion(currentQuestion))
  }, [dispatch, currentQuestion]);

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

  return (
    <Grid container={true}>
      <Grid item={true} xs={12}>
        <Question
          currentQuestion={currentQuestion}
          activity={activity}
          onAnswer={onAnswer}
          round={currentRound}
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