/**
 * @flow
 */

import React from 'react';
import codePush from 'react-native-code-push';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// $FlowFixMe - flow is drunk again
import { useScreens } from 'react-native-screens';
import AppNavigator from './navigators/AppNavigator';

useScreens();

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
