/**
 * @flow
 */

import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DetailsScreen';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Pokedex',
      },
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: {
        title: 'Details',
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;
