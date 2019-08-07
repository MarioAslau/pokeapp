/**
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../theme/theme';

import type { NavigationScreenProp } from 'react-navigation';

type Props = {
  navigation: NavigationScreenProp<any>,
};

export default function SearchScreen(props: Props): React$Node {
  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
    </View>
  );
}

SearchScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: theme.baseColors.frames,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    color: '#fff',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.baseColors.background,
    paddingLeft: theme.padding.base,
    paddingRight: theme.padding.base,
    paddingBottom: theme.padding.base,
    paddingTop: 50,
  },
});
