import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import Question from '../../Question';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import {getQuestions} from './actions';
import {getActivities} from '../actions';
import { Typography } from '@material-ui/core';

function WithQuestions(props) {
  const {match, questions, dispatch, questionIds, activities} = props;

  const id = match.params.id;
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentId, setCurrentId] = useState(1);
  let activity = activities[id];

  useEffect(() => {
    dispatch(getActivities());
    if (!activity) {
      activity = activities[id];
    }
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getQuestions(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (questionIds && questionIds.length > 0) {
      setCurrentQuestion(questions[currentId]);
    }
  }, [questionIds]);

  const onAnswer = () => {
    if (currentId <= questionIds.length - 1) {
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
  console.log(currentQuestion);

  return (
    <Grid container={true}>
      <Grid item={true} xs={12}>
        <Question currentQuestion={currentQuestion} activity={activity} onAnswer={onAnswer} round={null}/>
      </Grid>
      <Grid item={true} xs={12}>
        <Button component={Link} to="/"><HomeIcon/></Button>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  questions: state.questionsOnly.byId,
  questionIds: state.questionsOnly.allIds,
  activities: state.activities.byId
});

const mapDispatchToProps = (dispatch) => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(WithQuestions);