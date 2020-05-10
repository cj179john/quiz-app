import React, {useEffect, useState} from 'react';
import Question from '../../Question';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import {getRounds, getRoundQuestions, getQuestionCount} from './actions';
import {getActivities} from '../actions';
import {Typography} from '@material-ui/core';
import Result from './Result';
import CacheService from '../../../services/CacheService';
import BackToHome from '../../Commons/BackToHome';

const cacheService = new CacheService();
const CACHE_ITEM_NAME = 'processedQuestions';

cacheService.resetItem(CACHE_ITEM_NAME, []);

function AllRounds(props) {
  const {match, questions, dispatch, questionIds, activities, rounds, roundIds, questionCount} = props;
  const [currentRound, setCurrentRound] = useState(null);
  const [currentRoundOrder, setCurrentRoundOrder] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentQuestionOrder, setCurrentQuestionOrder] = useState(1);
  const [waitForNextRound, setWaitForNextRound] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const id = match.params.id;

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
        <Result activity={activity} cacheName={CACHE_ITEM_NAME} rounds={rounds}/>
        <BackToHome onClick={clearCache} />
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