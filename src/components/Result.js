import React from 'react';
import { List, ListItem, ListItemText, Divider, makeStyles } from '@material-ui/core';

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
  const {activity, questions} = props;
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
        Object.keys(questions).map(id => {
          const question = questions[id];
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
