import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getActivities} from '../actions';
import Rounds from './Rounds';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';

const Activity = (props) => {
  const {match, dispatch, activities} = props;

  const id = match.params.id;

  let activity = activities[id];

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch, id]);

  if (activity) {
    return (<Rounds activity={activity} />)
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
});

const mapDispatchToProps = (dispatch) => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(Activity);