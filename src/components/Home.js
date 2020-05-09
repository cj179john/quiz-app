import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import { getActivities } from './Activities/actions';
import {map, values} from 'ramda';
import { List, ListItem, ListItemText, Divider } from '@material-ui/core';

const useStyles = makeStyles(theme =>
  createStyles({
    questionBox: {
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(8),
        maxWidth: 345,
      }
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
  const links = (id) => ({
    1: `/activities/${id}/questions`,
    2: `/activities/${id}/rounds`
  });

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <List component="nav" className={classes.root} aria-label="result-list">
      <ListItem>
        <ListItemText primary="Quiz" />
      </ListItem>
      <ListItem>
        <ListItemText primary='Results' />
      </ListItem>
      <Divider light />
      {
        map(activity => (
          <ListItem button
            variant="contained"
            color="primary"
            component={Link}
            to={links(activity.id)[activity.id]}
          >
            {activity.name}
          </ListItem>
        ), values(activities))
      }
    </List>
  );
}

const mapStateToProps = (state) => ({
  activities: state.activities.byId
});

const mapDispatchToProps = (dispatch) => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(Home);