import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getActivities, getActivityQuestionCount} from '../actions';
import Rounds from './Rounds';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import Result from './Result';
import BackToHome from '../../Commons/BackToHome';

const Activity = (props) => {
  const {match, dispatch, activities, processed} = props;
  const [showResult, setShowResult] = useState(false);
  const id = match.params.id;
  const activity = activities[id];

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch, id]);

  useEffect(() => {
    if (activity) {
      dispatch(getActivityQuestionCount(activity.id));
    }
  }, [dispatch, activity]);

  if (showResult) {
    return (
      <>
        <Result activity={activity} processed={processed} />
        <BackToHome />
      </>
    );
  }

  if (activity) {
    return (<Rounds
      activity={activity}
      setShowResult={setShowResult}
    />)
  } else {
    return (
      <Grid container={true}>
        <Typography variant='h4'>Loading...</Typography>
      </Grid>
    )
  }
};

const mapStateToProps = (state) => ({
  activities: state.activities.byId,
  processed: state.activities.processed
});

const mapDispatchToProps = (dispatch) => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(Activity);