/**
 * @flow
 */

import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
// import Button from '../components/Button/Button';
import type { NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';
import PokeList from '../components/PokeList/PokeList';
import PokeCard from '../components/PokeCard/PokeCard';
import theme from '../theme/theme';
import { addPokemon } from '../redux/actions/pokemon';
type Props = {
  navigation: NavigationScreenProp<any>,
  pokemon: any,
};

type Pokemon = {
  number: number,
  name: String,
  classification: string,
  image: string,
  types: [string],
  weight: {
    maximum: string,
  },
  height: {
    maximum: string,
  },
  maxHP: number,
  maxCP: number,
};

const PokemonsQuery = gql`
  query pokemons {
    pokemons(first: 40) {
      number
      name
      classification
      image
      types
      weight {
        maximum
      }
      height {
        maximum
      }
      maxHP
      maxCP
      evolutions {
        name
        image
      }
    }
  }
`;

function HomeScreen(props: Props): React$Node {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>POKEMON OF THE DAY</Text>

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
          const randomPokemon2 =
            pokemons[Math.floor(Math.random() * (pokemons.length - 1))];
          const randomPokemon3 =
            pokemons[Math.floor(Math.random() * (pokemons.length - 2))];

          console.log(
            'Pokemon1:',
            randomPokemon.name,
            'Pokemon2:',
            randomPokemon2.name,
            'Pokemon3:',
            randomPokemon3.name,
          );

          if (pokemons.length > 0) {
            addPokemon(pokemons);
          }

          return <PokeCard pokemon={randomPokemon} />;
          // <PokeList pokemons={pokemons} navigation={props.navigation} />;
        }}
      </Query>
    </View>
  );
}

HomeScreen.navigationOptions = {
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: '800',
    color: theme.baseColors.white,
  },
  flex1: {
    flex: 1,
  },
});

const mapDispatchToProps = dispatch => ({
  addPokemon: () => dispatch(addPokemon()),
});

const mapStateToProps = state => ({
  pokemon: state.pokemon,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
