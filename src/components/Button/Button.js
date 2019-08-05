/**
 * @flow
 */

import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  navigation: NavigationScreenProp<any>,
  item: any, // TODO: This can keep changing so for now, I'll leave it like this
};

export default function Button({ item, navigation }: Props): React$Node {
  return (
    <TouchableOpacity
      accessibilityLabel="Go to pokemon details"
      accessibilityComponentType="button"
      accessibilityTraits="button"
      onPress={() => navigation.navigate('Details', { item: item })}
      style={styles.itemRow}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemRow: {
    flex: 1,
    height: 30,
    marginVertical: 10,
  },
});
