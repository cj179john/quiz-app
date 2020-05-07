import React from 'react';
import {Button, Grid} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {createStyles, makeStyles} from '@material-ui/core/styles';

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

function Home() {
  const classes = useStyles();

  return (
    <Grid
    container={true}
    direction="column"
    justify="center"
    spacing={3}
    className={classes.questionBox}
    alignItems="center"
  >
    <Grid item={true} xs={12}>
      <Button variant="contained" color="primary" component={Link} to='/questions'>Activity 1</Button>
    </Grid>
    <Grid item={true} xs={12}>
      <Button variant="contained" color="primary" component={Link} to='/questions'>Activity 2</Button>
    </Grid>
  </Grid>
  );
}

export default Home;