import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

function Result(props) {
  const {activity, questions} = props;

  return (
    <Grid
      container={true}
      spacing={3}
      alignItems='center'
      direction='column'
    >
      <Grid item={true} xs={12}>
        <Typography variant="h6">{activity.name}</Typography>
      </Grid>
      <Grid item={true} xs={12}>
        <Typography variant="h4">Results</Typography>
      </Grid>
      {
        Object.keys(questions).map(id => {
          const question = questions[id];
          return (
            <Grid item={true} xs={12} key={id}>
              <Grid item={true} xs={6}>
                Q{question.id}
              </Grid>
              <Grid item={true} xs={6}>
                <Typography variant="h5">{question.isCorrect ? 'correct' : 'false'}</Typography>
              </Grid>
            </Grid>
          );
        })
      }
    </Grid>
  );
};

export default Result;
