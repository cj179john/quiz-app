import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
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
        userSelect: "none",
        overflowX: "hidden",
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        position: "absolute",
        top: "50%",
        left: "50%",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "70%",
        height: "75%"
      }
    })
);

const App = () => {

  const classes = useStyles();

  return (
    <Router basename="/">
      <div className={classes.root}>
        <div className={classes.contentGrid}>
          <Paper
            className={classes.content}
          >
            <Content/>
          </Paper>
        </div>
      </div>
    </Router>
  );
}

export default App;
