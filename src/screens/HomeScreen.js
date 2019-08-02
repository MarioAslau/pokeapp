/**
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
// import Button from '../components/Button/Button';
import type { NavigationScreenProp } from 'react-navigation';
import PokeList from '../components/PokeList/PokeList';

type Props = {
  navigation: NavigationScreenProp<any>,
};

type Pokemon = {
  number: number,
  name: String,
  classification: string,
  image: string,
  types: [string],
};

const PokemonsQuery = gql`
  query pokemons {
    pokemons(first: 40) {
      number
      name
      classification
      image
      types
    }
  }
`;

export default function HomeScreen(props: Props): React$Node {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Hello this is the home screen</Text>

      <Query query={PokemonsQuery} style={styles.flex1}>
        {({
          loading,
          error,
          data,
        }: {
          loading: boolean,
          error: Object,
          data: { pokemons: [Pokemon] },
        }): React$Node => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;

          const pokemons = data.pokemons;
          const randomPokemon =
            pokemons[Math.floor(Math.random() * pokemons.length)];

          return <PokeList pokemons={pokemons} navigation={props.navigation} />;
        }}
      </Query>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  flex1: {
    flex: 1,
  },
});
