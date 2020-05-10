import React from 'react';
import { List, ListItem, ListItemText, Divider, makeStyles, Typography } from '@material-ui/core';
import {SingleQuestion} from '../../Commons/SingleQuestion';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    margin: 'auto'
  },
  center: {
    textAlign: 'center'
  },
}));

function Result(props) {
  const {activity, questions} = props;

  const classes = useStyles();
  return (
    <List component="nav" className={classes.root} aria-label="result-list">
      <ListItem className={classes.center}>
          <ListItemText><Typography variant="h5">{activity.name}</Typography></ListItemText>
      </ListItem>
      <ListItem className={classes.center}>
        <ListItemText><Typography variant="h5">Results</Typography></ListItemText>
      </ListItem>
      <Divider light />
      {
        Object.keys(questions).map(id => {
          const question = questions[id];
          return (
            <SingleQuestion question={question} />
          );
        })
      }
    </List>
  );
};

export default Result;