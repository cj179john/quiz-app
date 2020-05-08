import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {Content} from './components/Content';
import blue from '@material-ui/core/colors/blue';
import { Card } from '@material-ui/core';

const useStyles = makeStyles(theme =>
    createStyles({
      contentGrid: {
        flexGrow: 1,
        padding: theme.spacing(3)
      },
      root: {
        display: 'flex',
      },
      content: {
        userSelect: 'none',
        overflowX: 'hidden',
        margin: 'auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }
    })
);

const App = () => {

  const classes = useStyles();

  return (
    <Router basename="/">
      <div className={classes.root}>
        <div className={classes.contentGrid}>
          <Card
            className={classes.content}
          >
            <Content/>
          </Card>
        </div>
      </div>
    </Router>
  );
}

export default App;
