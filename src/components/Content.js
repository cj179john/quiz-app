import {Box, Grid} from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import {routes} from '../routes';

const appRoutes = routes.map(
  (route, index) => {
    return (
      <Route
        key={index}
        exact={true}
        path={route.path}
        component={route.component}
      />
    );
  });;

export const Content = () => {
  return (
    <Switch>
      {appRoutes}
    </Switch>
  );
};