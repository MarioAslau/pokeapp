/**
 * @flow
 */

import React from 'react';
import codePush from 'react-native-code-push';
import { StatusBar } from 'react-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store/configureStore';

// $FlowFixMe - flow is drunk again
import { useScreens } from 'react-native-screens';
import AppNavigator from './navigators/AppNavigator';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-native-gesture-handler';

useScreens();

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh',
});

const AppContainer = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <StatusBar barStyle="light-content" />
        <AppNavigator />
      </PersistGate>
    </Provider>
  </ApolloProvider>
);
//this is marios branch
const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
  minimumBackgroundDuration: 60 * 3,
};

export const App = codePush(codePushOptions)(AppContainer);
