import React from 'react';
import { ListItem, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  center: {
    textAlign: 'center'
  },
}));

export const SingleQuestion = (props) => {
  const {question} = props;

  const classes = useStyles();

  return (
    <ListItem button key={question.id} divider={true} className={classes.center}>
    <ListItemText primary={`Q${question.id}`} />
    <ListItemText primary={question.isCorrect ? 'correct' : 'false'} />
  </ListItem>
  );
};

