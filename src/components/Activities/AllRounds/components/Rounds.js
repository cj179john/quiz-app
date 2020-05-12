import React, {useEffect, useState} from 'react';
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
  const {activity, rounds, roundIds, setShowResult} = props;
  const [currentRound, setCurrentRound] = useState(null);
  const [endOfRound, setEndOfRound] = useState(false);

  const classes = useStyles();

  const moveToNextRound = () => {
    const nextRoundOrder = currentRound.order + 1;
    if (nextRoundOrder <= roundIds.length) {
      setEndOfRound(false);
      setCurrentRound(rounds[nextRoundOrder]);
    } else {
      setShowResult(true);
    }
  };

  useEffect(() => {
    setCurrentRound(rounds[1]);
  }, [activity, rounds])

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

export default Rounds;
