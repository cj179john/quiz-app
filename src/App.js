import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {Content} from './components/Content';
import blue from '@material-ui/core/colors/blue';

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
        backgroundColor: blue[200],
        position: "sticky",
        minHeight: 600,
        minWidth: 400,
        marginTop: theme.spacing(8)
      }
    })
);

const App = () => {

  const classes = useStyles();

  return (
    <Router basename="/">
      <div className={classes.root}>
        <div className={classes.contentGrid}>
          <Grid
            container={true}
            className={classes.content}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Content/>
          </Grid>
        </div>
      </div>
    </Router>
  );
}

export default App;
