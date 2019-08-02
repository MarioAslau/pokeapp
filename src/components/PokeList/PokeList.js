/**
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Button from '../Button/Button';
import type { NavigationScreenProp } from 'react-navigation';

type Pokemon = {
  number: number,
  name: String,
  classification: string,
  image: string,
  types: [string],
};

type Props = {
  navigation: NavigationScreenProp<any>,
  pokemons: Pokemon,
};

// $FlowFixMe
const keyExtractor = (item, index): string => item.number;

export default function PokeList(props: Props): React$Node {
  return (
    <FlatList
      data={props.pokemons}
      renderItem={({ item }) => (
        <Button item={item} navigation={props.navigation} />
      )}
      keyExtractor={keyExtractor}
      style={styles.flex1}
    />
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
});
