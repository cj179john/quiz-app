import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getRounds} from './actions';
import Questions from './Questions';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {createStyles, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    questionBox: {
      padding: theme.spacing(8)
    },
    option: {
      textAlign: 'center'
    }
  })
);

const Rounds = (props) => {
  const {dispatch, activity, rounds, roundIds, setShowResult} = props;
  const [currentRound, setCurrentRound] = useState(null);
  const [endOfRound, setEndOfRound] = useState(false);

  const classes = useStyles();

  const moveToNextRound = () => {
    const nextRoundOrder = currentRound.order + 1;
    if (nextRoundOrder > roundIds.length) {
      setShowResult(true);
    } else {
      setEndOfRound(false);
      setCurrentRound(rounds[nextRoundOrder]);
    }
  };

  useEffect(() => {
    if (activity) {
      dispatch(getRounds(activity.id));
    }
  }, [dispatch, activity]);

  useEffect(() => {
    setCurrentRound(rounds[1]);
  }, [rounds])

  if (endOfRound) {
    return (
      <Grid
        container={true}
        spacing={8}
        className={classes.questionBox}
      >
      <Grid item={true} className={classes.option} xs={12}>
        <Button onClick={moveToNextRound}>Next Round</Button>
      </Grid>
    </Grid>
    );
  }

  return (
    <Questions
      currentRound={currentRound}
      activity={activity}
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
