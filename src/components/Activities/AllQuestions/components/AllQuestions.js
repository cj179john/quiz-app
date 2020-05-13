import React, {useEffect, useState} from 'react';
import Question from '../../../Commons/Question';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import {getQuestions} from '../actions';
import {getActivities} from '../../actions';
import { Typography } from '@material-ui/core';
import Result from './Result';
import BackToHome from '../../../Commons/BackToHome';

function AllQuestions(props) {
  const {match, questions, dispatch, questionIds, activities} = props;
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentId, setCurrentId] = useState(1);

  const id = match.params.id;
  let activity = activities[id];

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getQuestions(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (questionIds && questionIds.length > 0) {
      setCurrentQuestion(questions[currentId]);
    }
  }, [questionIds, currentId, questions]);

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
      <>
        <Result questions={questions} activity={activity} />
        <BackToHome />
      </>
    );
  }

  return (
    <Grid container={true}>
      <Grid item={true}>
        <Question currentQuestion={currentQuestion} activity={activity} onAnswer={onAnswer} round={null}/>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  questions: state.questionsOnly.byOrder,
  questionIds: state.questionsOnly.allOrders,
  activities: state.activities.byId,
});

const mapDispatchToProps = (dispatch) => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(AllQuestions);