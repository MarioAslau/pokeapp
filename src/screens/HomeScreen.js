/**
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { graphql, type OperationComponent } from 'react-apollo';
import { gql } from 'apollo-boost';
import { PokeCard } from '../components/PokeCard/PokeCard';
// import { useNavigation } from 'react-navigation-hooks';

import type { NavigationScreenProp } from 'react-navigation';

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
    pokemons(first: 9) {
      number
      name
      classification
      image
      types
      attacks {
        fast {
          name
          type
          damage
        }
      }
      evolutions {
        id
        number
        name
        classification
        image
        types
      }
    }
  }
`;

const emptyPokemon = {
  number: 0,
  name: '',
  classification: '',
  image: '',
  types: [''],
}

// $FlowFixMe
const getPokemonArray = (pokemons) => {
  // console.log('POKE:', pokemons && pokemons.length)
  const pokemon = pokemons;
  if (pokemons && pokemon.length % 2 !== 0) { pokemon.push(emptyPokemon) }
  return pokemons
}

const keyExtractor = (item, index): string => item.number;

function HomeScreenComponent(props: Props): React$Node {
  const { loading, error, pokemons } = props.data;
  // console.log('here is my data', props.data.pokemons);
  const checkedPokemon = getPokemonArray(pokemons);

  const renderItem = ({ item, index }: { item: Object, index: number }): React$Node => {
    return <PokeCard pokemon={item} navigation={props.navigation} index={index} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>CHOOSE YOUR POKEMON</Text>

      {loading ? <Text>Loading...</Text>
        : error ? <Text>Error :</Text>
          : <FlatList
            data={pokemons}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            numColumns={2}
          />}
    </View>
  );
}

export const HomeScreen = graphql(PokemonsQuery)(HomeScreenComponent)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#595959',
  },
  welcome: {
    fontSize: 20,
    fontWeight: '600',
    margin: 10,
    textAlign: 'center',
    color: 'white',
  },
});
