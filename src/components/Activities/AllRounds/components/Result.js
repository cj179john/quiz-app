import React from 'react';
import {groupBy, map} from 'ramda';
import { List, ListItem, ListItemText, Divider, makeStyles, Typography } from '@material-ui/core';
import {SingleQuestion} from '../../../Commons/SingleQuestion';

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
  const {activity, processed, rounds} = props;
  const classes = useStyles();

  const questionArray = Object.values(processed).map(question => question);
  const cachedQuestions = groupBy((x) => x.roundId, map((x) => x, questionArray));

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
        Object.keys(cachedQuestions).map(roundOrder => {
          const questions = cachedQuestions[roundOrder];
          return (
            <>
              <ListItem className={classes.center} key={roundOrder}>
                <ListItemText><Typography variant="h6">{rounds[roundOrder].title}</Typography></ListItemText>
              </ListItem>
              {
                (map(question => {
                  return (
                    <SingleQuestion question={question} />
                  )
                }, questions))
              }
            </>
          )
        })
      }
    </List>
  );
};

export default Result;
