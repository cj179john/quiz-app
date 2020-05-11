import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getRounds} from './actions';
import Questions from './Questions';

const Rounds = (props) => {
  const {dispatch, activity, setShowResult, rounds, roundIds} = props;
  const [currentRound, setCurrentRound] = useState(null);
  const [endOfRound, setEndOfRound] = useState(false);

  const moveToNextRound = () => {
    const nextRoundOrder = setCurrentRound.order + 1;
    setEndOfRound(false);
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
    if (endOfRound === true && currentRound) {
      if (currentRound.order < roundIds.length) {
        setCurrentRound(rounds[currentRound.order + 1]);
        setEndOfRound(false);
      } else {
        setShowResult(true);
      }
    }
  }, [endOfRound, currentRound, roundIds.length, rounds, setShowResult]);

  return (
    <Questions
      currentRound={currentRound}
      activity={activity}
      moveToNextRound={moveToNextRound}
      endOfRound={endOfRound}
      setEndOfRound={setEndOfRound}
    />
  );
};

const mapStateToProps = (state) => ({
  rounds: state.withRounds.roundByOrder,
  roundIds: state.withRounds.roundOrders,
});

const mapDispatchToProps = (dispatch) => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(Rounds);
