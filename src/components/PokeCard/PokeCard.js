/**
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { useNavigation } from 'react-navigation-hooks';

import type { NavigationScreenProp } from 'react-navigation';

type Pokemon = {
  number: number,
  name: string,
  classification: string,
  image: string,
  types: [string],
};

type Props = {
  navigation: NavigationScreenProp<any>,
  pokemon: Pokemon,
  index: number,
  ghost: Boolean,
};

export function PokeCard(props: Props): React$Node {
  const { navigation, pokemon, index } = props;

  if (pokemon.name === '') {
    return <View style={{ width: '100%', padding: 10, flex: 1 }} />
  }

  return (
    <View style={ [styles.container, index % 2 === 0 ? styles.containerEven : styles.containerUnEven] }>
      <TouchableOpacity
        accessibilityLabel="Go to pokemon details"
        accessibilityComponentType="button"
        accessibilityTraits="button"
        onPress={() => navigation.navigate('Details', { pokemon })}
        style={styles.itemRow}
      >
        <Text style={styles.title}>{pokemon.name}</Text>
        <View style={styles.typeContainer}>
          {
            pokemon.types.map(type => <Text style={styles.type} key={type}>{type}</Text>)
          }
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  containerEven: {
    marginRight: 8,
  },
  containerUnEven: {
    marginLeft: 8,
  },
  itemRow: {
    flex: 1,
    height: 100,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 10,
  },
  typeContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  type: {
    backgroundColor: '#ebedf0',
    display: 'flex',
    marginBottom: 10,
    padding: 5,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 12,
    flexShrink: 1,
    alignSelf: 'flex-start',
  },
});
