/**
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import theme from '../../theme/theme';

type Pokemon = {
  number: number,
  name: String,
  classification: string,
  image: string,
  types: [string],
};

type Props = {
  pokemon: Pokemon,
};

export default function PokeCard(props: Props): React$Node {
  return (
    <View style={styles.container}>
      <Text>PokeCard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
