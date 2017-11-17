import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Setup from './js/setup';
import Home from './js/components/home';


const scenes = Actions.create(
  <Scene key="root">
    <Scene key="setup" component={Setup} hideNavBar  />
    <Scene key="home" component={Home} hideNavBar/>
  </Scene>
);

const AppNavigator = (props) => ( <Router scenes={scenes} /> );

export default AppNavigator;



