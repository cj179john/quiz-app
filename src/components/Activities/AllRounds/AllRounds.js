import React, {useEffect, useState} from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import Question from '../../Question';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import {getRounds, getRoundQuestions, getQuestionCount} from './actions';
import {getActivities} from '../actions';
import { Typography, makeStyles } from '@material-ui/core';
import Result from '../../Result';
import CacheService from '../../../services/cache-service';

const cacheService = new CacheService();
const CACHE_ITEM_NAME = 'processedQuestions';

cacheService.resetItem(CACHE_ITEM_NAME, []);

const useStyles = makeStyles(theme => ({
    homeIcon: {
      marginLeft: '50%'
    }
  })
);

function AllRounds(props) {
  const {match, questions, dispatch, questionIds, activities, rounds, roundIds, questionCount} = props;

  const classes = useStyles();
  const id = match.params.id;
  const [currentRound, setCurrentRound] = useState(null);
  const [currentRoundOrder, setCurrentRoundOrder] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentQuestionOrder, setCurrentQuestionOrder] = useState(1);
  const [waitForNextRound, setWaitForNextRound] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const moveToNextRound = () => {
    setWaitForNextRound(false);
    const nextRoundOrder = currentRoundOrder + 1;
    setCurrentRoundOrder(nextRoundOrder);
    setCurrentRound(rounds[nextRoundOrder]);
  };

  const clearCache = () => cacheService.resetItem(CACHE_ITEM_NAME, []);

  let activity = activities[id];

  useEffect(() => {
    dispatch(getActivities());
    dispatch(getRounds(id));
    dispatch(getQuestionCount(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (roundIds && roundIds.length > 0) {
      setCurrentRound(rounds[currentRoundOrder]);
    }
  }, [roundIds, rounds, currentRoundOrder]);

  useEffect(() => {
    dispatch(getRoundQuestions(id, currentRoundOrder))
    setCurrentQuestionOrder(1);
  }, [dispatch, id, currentRoundOrder]);

  useEffect(() => {
    if (questionIds && questionIds.length > 0) {
      setCurrentQuestion(questions[currentQuestionOrder]);
    }
  }, [questionIds, currentQuestionOrder, questions]);

  const onAnswer = () => {

    cacheService.addItem(CACHE_ITEM_NAME, currentQuestion);

    if (currentRoundOrder <= roundIds.length) {
      if (currentQuestionOrder < questionIds.length) {
        const nextId = currentQuestionOrder + 1;
        setCurrentQuestionOrder(nextId);
        setCurrentQuestion(questions[nextId]);

      } else if (currentRoundOrder < roundIds.length) {
        setWaitForNextRound(true);
      }
    }

    const processed = cacheService.getItem(CACHE_ITEM_NAME).length;
    if (processed === questionCount) {
      setShowResult(true);
    }
  };

  const BackToHome = () => (<Button onClick={clearCache} component={Link} to="/"><HomeIcon/></Button>);

  if (currentQuestion === null) {
    return (
      <Grid container={true}>
        <Typography variant='h4'>Loading...</Typography>
      </Grid>
    )
  }

  if (showResult) {
    return (
      <>
        <Result questions={null} activity={activity} cacheName={CACHE_ITEM_NAME}/>
        <BackToHome />
      </>

    );
  }

  return (
    <Grid container={true}>
      <Grid item={true} xs={12}>
        <Question
          currentQuestion={currentQuestion}
          activity={activity}
          onAnswer={onAnswer}
          round={currentRound}
          waitForNextRound={waitForNextRound}
          moveToNextRound={moveToNextRound}
        />
      </Grid>
      <Grid item={true} xs={12} className={classes.homeIcon}>
        <BackToHome />
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  questions: state.withRounds.byOrder,
  questionIds: state.withRounds.allOrders,
  questionCount: state.withRounds.count,
  activities: state.activities.byId,
  rounds: state.withRounds.roundByOrder,
  roundIds: state.withRounds.roundOrders,
});

const mapDispatchToProps = (dispatch) => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(AllRounds);