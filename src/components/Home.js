import React, {useEffect} from 'react';
import {Button, Grid, CardActionArea, CardMedia, CardContent, CardActions, Card, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import { getActivities } from './Activities/actions';
import {map, values} from 'ramda';

const useStyles = makeStyles(theme =>
  createStyles({
    questionBox: {
      padding: theme.spacing(8),
      maxWidth: 345
    },
    question: {
      border: 1
    },
    answer: {
      padding: theme.spacing(8)
    }
  })
);

function Home(props) {
  const {activities, dispatch} = props;

  const classes = useStyles();

  useEffect(() => {
    dispatch(getActivities());
  }, (dispatch, activities));

  return (
    <Grid
    container={true}
    direction="column"
    justify="center"
    spacing={3}
    className={classes.questionBox}
    alignItems="center"
  >
    {
      map(activity => (
        <Grid item={true} xs={12} key={activity.id}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={`/activities/${activity.id}/questions`}
          >
            {activity.name}
          </Button>
        </Grid>
      ), values(activities))
    }
  </Grid>
  // <Card className="questionBox">
  //   <CardActionArea>
  //       <CardContent>
  //         <Typography gutterBottom variant="h5" component="h2">
  //           Lizard
  //         </Typography>
  //         <Typography variant="body2" color="textSecondary" component="p">
  //           Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
  //           across all continents except Antarctica
  //         </Typography>
  //       </CardContent>
  //     </CardActionArea>
  //     <CardActions>
  //       <Button size="small" color="primary">
  //         Share
  //       </Button>
  //       <Button size="small" color="primary">
  //         Learn More
  //       </Button>
  //     </CardActions>
  // </Card>
  );
}

const mapStateToProps = (state) => ({
  activities: state.activities.byId
});

const mapDispatchToProps = (dispatch) => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(Home);