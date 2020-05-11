import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getRounds, getRoundQuestions, getQuestionCount} from './actions';
import {getActivities} from '../actions';
import Questions from './Questions';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import Result from './Result';
import BackToHome from '../../Commons/BackToHome';

const Rounds = (props) => {
  const {dispatch, activity, rounds, roundIds} = props;
  const [currentRound, setCurrentRound] = useState(null);
  const [endOfRound, setEndOfRound] = useState(false);
  const [waitForNextRound, setWaitForNextRound] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const moveToNextRound = () => {
    setWaitForNextRound(false);
    const nextRoundOrder = setCurrentRound.order + 1;
    setCurrentRound(rounds[nextRoundOrder]);
  };

  useEffect(() => {
    if (activity) {
      dispatch(getRounds(activity.id));
    }
  }, [dispatch, activity]);

  useEffect(() => {
    setCurrentRound(rounds[1]);
  }, [rounds]);

  useEffect(() => {
    console.log(endOfRound);

    if (endOfRound === true && currentRound) {
      if (currentRound.order < roundIds.length) {
        setCurrentRound(rounds[currentRound.order + 1]);
        setEndOfRound(false);
      } else {
        setShowResult(true);
      }
    }
  }, [endOfRound, currentRound]);

  if (showResult) {
    return (
      <>
        <Result activity={activity} rounds={rounds}/>
        <BackToHome />
      </>

    );
  }

  // if (currentRound && activity) {
  return (
    // <></>
    <Questions
      currentRound={currentRound}
      activity={activity}
      moveToNextRound={moveToNextRound}
      setWaitForNextRound={setWaitForNextRound}
      setEndOfRound={setEndOfRound}
    />
  );
  // } else {
  //   return (
  //     <Grid container={true}>
  //       <Typography variant='h4'>Loading round...</Typography>
  //     </Grid>
  //   )
  // }

};

const mapStateToProps = (state) => ({
  rounds: state.withRounds.roundByOrder,
  roundIds: state.withRounds.roundOrders,
});

const mapDispatchToProps = (dispatch) => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(Rounds);
