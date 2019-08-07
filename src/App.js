/**
 * @flow
 */

import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import codePush from 'react-native-code-push';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// $FlowFixMe - flow is drunk again
import { useScreens } from 'react-native-screens';

import { HomeScreen } from './screens/HomeScreen';
import { DetailsScreen } from './screens/DetailsScreen';
import { ModalScreen } from './screens/ModalScreen'

useScreens();

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
      },
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: {
        // title: 'Details',
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
)

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
    mode: 'modal',
    transparentCard: true,
    navigationOptions: {
      header: null,
      gesturesEnabled: false, // allow me to drag away
    },
    // old way of doing transparentCard: true
    // cardStyle: {
    //   backgroundColor: 'transparent',
    //   opacity: 1,
    // },
  }
);

const AppNavigator = createAppContainer(RootStack);

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh',
});

const AppContainer = () => (
  <ApolloProvider client={client}>
    <AppNavigator />
  </ApolloProvider>
);

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
  minimumBackgroundDuration: 60 * 3,
};

export const App = codePush(codePushOptions)(AppContainer);
