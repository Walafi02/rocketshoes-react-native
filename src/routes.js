import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {fromRight} from 'react-navigation-transitions';

import Cart from './pages/Cart';
import Home from './pages/Home';

import Header from './components/Header/index';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
      transitionConfig: () => fromRight(),
      cardStyle: {
        backgroundColor: '#000',
      },
    },
  ),
);

export default Routes;
