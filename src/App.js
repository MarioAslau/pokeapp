/**
 * @flow
 */

import React from 'react';
import codePush from 'react-native-code-push';
import { StyleSheet, View } from 'react-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import theme from './theme/theme';
import { store, persistor } from './redux/store/configureStore';

// $FlowFixMe - flow is drunk again
import { useScreens } from 'react-native-screens';
import AppNavigator from './navigators/AppNavigator';
import { PersistGate } from 'redux-persist/integration/react';

useScreens();

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh',
});

const AppContainer = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <View style={styles.container}>
          <AppNavigator />
        </View>
      </PersistGate>
    </Provider>
  </ApolloProvider>
);

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
  minimumBackgroundDuration: 60 * 3,
};

export const App = codePush(codePushOptions)(AppContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.baseColors.frames,
  },
});
