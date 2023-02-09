import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from './Index/Index';
import NowPlaying from './NowPlaying/NowPlaying';
import TopRated from './TopRated/TopRated';
import UnknownPage from './UnknownPage/UnknownPage';

const Pages = () => (
  <Switch>
    <Route exact path="/" component={Index} />
    <Route exact path="/nowPlaying" component={NowPlaying}/>
    <Route exact path="/topRated" component={TopRated} />
    <Route component={UnknownPage} />
  </Switch>
);

export default Pages;
