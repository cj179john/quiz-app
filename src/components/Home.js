import React, {useEffect} from 'react';
import {Button, Grid} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import { getActivities } from '../actions';
import {map, values} from 'ramda';

const useStyles = makeStyles(theme =>
  createStyles({
    questionBox: {
      padding: theme.spacing(8)
    },
    question: {
      border: 1
    },
    answer: {
      padding: theme.spacing(8)
    }
  })
);

function Home(props) {
  const {activities, dispatch} = props;

  const classes = useStyles();

  useEffect(() => {
    dispatch(getActivities());
  }, (dispatch, activities));

  return (
    <Grid
    container={true}
    direction="column"
    justify="center"
    spacing={3}
    className={classes.questionBox}
    alignItems="center"
  >
    {
      map(activity => (
        <Grid item={true} xs={12} key={activity.id}>
          <Button variant="contained" color="primary" component={Link} to='/questions'>{activity.name}</Button>
        </Grid>
      ), values(activities))
    }
  </Grid>
  );
}

const mapStateToProps = (state) => ({
  activities: state.activities.byId
});

const mapDispatchToProps = (dispatch) => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(Home);