import React from 'react';
import { List, ListItem, ListItemText, Divider, makeStyles } from '@material-ui/core';
import CacheService from '../services/cache-service';
import {indexBy} from 'ramda';

const cacheService = new CacheService();

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    margin: 'auto'
  },
  header: {
    textAlign: 'center'
  },
}));

function Result(props) {
  const {activity, questions, cacheName} = props;
  const cachedQuestions = questions ? questions : indexBy((x) => x.id, cacheService.getItem(cacheName));
  console.log(cachedQuestions)
  const classes = useStyles();
  return (
    <List component="nav" className={classes.root} aria-label="result-list">
      <ListItem>
        <ListItemText primary={activity.name} />
      </ListItem>
      <ListItem>
        <ListItemText primary='Results' />
      </ListItem>
      <Divider light />
      {
        Object.keys(cachedQuestions).map(id => {
          const question = cachedQuestions[id];
          return (
            <ListItem button key={id} divider={true}>
              <ListItemText primary={`Q${question.id}`} />
              <ListItemText primary={question.isCorrect ? 'correct' : 'false'} />
            </ListItem>
          );
        })
      }
    </List>
  );
};

export default Result;
