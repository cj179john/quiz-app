import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import { getActivities } from './Activities/actions';
import {map, values} from 'ramda';
import { List, ListItem, ListItemText, Divider, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme =>
  createStyles({
    header: {
      marginBottom: theme.spacing(5),
      marginTop: theme.spacing(5),
      marginLeft: theme.spacing(10),
      [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(23),
      }
    },
    bodyText: {
      marginLeft: theme.spacing(9),
      [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(23),
      }
    },
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

export function Home(props) {
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
      <ListItem className={classes.header}>
        <Typography variant="h4" > Quiz </Typography>
      </ListItem>
      <Divider light />
      {
        map(activity => (
          <ListItem
            button
            divider={true}
            variant="contained"
            color="primary"
            component={Link}
            key={activity.id}
            to={links(activity.id)[activity.id]}
          >
            <ListItemText className={classes.bodyText} primary={activity.name} />
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