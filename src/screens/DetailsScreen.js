/**
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import theme from '../theme/theme';

import type { NavigationScreenProp } from 'react-navigation';

type Props = {
  navigation: NavigationScreenProp<any>,
};

export default function DetailsScreen(props: Props): React$Node {
  const pokemon = props.navigation.getParam('item', undefined);

  return (
    <View style={styles.container}>
      {pokemon ? (
        <View style={styles.parentView}>
          <Text
            style={styles.welcome}
          >{`this is pokemon ${pokemon.name}`}</Text>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={{
              uri: pokemon.image,
            }}
          />
          <View style={styles.overlap}>
            <Text
              style={styles.pokemonType}
            >{`${pokemon.classification}`}</Text>
          </View>
        </View>
      ) : null}
    </View>
  );
}

DetailsScreen.navigationOptions = {
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  pokemonType: {
    fontSize: 18,
  },
  overlap: {
    position: 'absolute',
    top: 60,
    right: 20,
    // backgroundColor: 'rgba(5,5,5,0.5)',
    backgroundColor: theme.pokemonTypes.water,
    padding: 5,
    borderRadius: 5,
  },
  image: { width: '100%', height: 300 },
  parentView: { flex: 1 },
});
