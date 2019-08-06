/**
 * @flow
 */

import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import theme from '../theme/theme';

const RootStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Pokemon',
        title: 'Pokemon',
      },
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: {
        tabBarLabel: 'Details',
      },
    },
  },
  {
    tabBarOptions: {
      // activeBackgroundColor: theme.baseColors.frames,
      // inactiveBackgroundColor: theme.baseColors.frames,
      activeTintColor: theme.baseColors.white,
      inactiveTintColor: 'red',
      style: {
        backgroundColor: theme.baseColors.frames,
      },
    },
  },
);

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;
