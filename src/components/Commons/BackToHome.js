import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    homeIcon: {
      marginLeft: '45%',
    }
  })
);

const BackToHome = (props) => {
  const {onClick} = props;
  const classes = useStyles();

  return (
    <Button onClick={onClick} className={classes.homeIcon} component={Link} to='/'>
      <HomeIcon/>
    </Button>
  );
};

export default BackToHome;