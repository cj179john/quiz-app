import React from 'react';
import { List, ListItem, ListItemText, Divider, makeStyles, Typography } from '@material-ui/core';

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

function CommonResult(props) {
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
            <ListItem button key={id} divider={true} className={classes.center}>
              <ListItemText primary={`Q${question.id}`} />
              <ListItemText primary={question.isCorrect ? 'correct' : 'false'} />
            </ListItem>
          );
        })
      }
    </List>
  );
};

export default CommonResult;