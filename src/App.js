import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {Content} from './components/Content';

const useStyles = makeStyles(theme =>
    createStyles({
      contentGrid: {
        flexGrow: 1,
        padding: theme.spacing(3)
      },
      root: {
        display: 'flex',
        backgroundColor: theme.palette.background.paper,
      }
    })
);

const App = () => {

  const classes = useStyles();

  return (
    <Router basename="/">
      <div className={classes.root}>
        <div className={classes.contentGrid}>
          <Grid container={true}>
            <Content/>
          </Grid>
        </div>
      </div>
    </Router>
  );
}

export default App;
