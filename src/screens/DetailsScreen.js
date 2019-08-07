/**
 * @flow
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import type { NavigationScreenProp } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PokeDetailModal } from '../modals/PokeDetailModal/PokeDetailModal'

type Props = {
  navigation: NavigationScreenProp<any>,
};

type Title = {
  title: string
}

export function DetailsScreen(props: Props): React$Node {
  const [modalVisibility, setmodalVisibility] = useState(false)
  const pokemon = props.navigation.getParam('pokemon', undefined);

  const openCloseModal = () => {
    setmodalVisibility(!modalVisibility)
    props.navigation.navigate('MyModal', { attacks: pokemon.attacks })
  }

  return (
    <View style={styles.container}>
      {/* <PokeDetailModal action={openCloseModal} visible={modalVisibility}/> */}
      {pokemon ? (
        <View style={styles.parentView}>
          <Text
            style={styles.welcome}
          >{`THIS IS ${pokemon.name.toUpperCase()}`}</Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              resizeMode={'contain'}
              source={{
                uri: pokemon.image,
              }}
            />
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                accessibilityLabel="Go to pokemon details"
                accessibilityComponentType="button"
                accessibilityTraits="button"
                onPress={openCloseModal}
                style={styles.modalButton}
              >
                <Icon name="pokemon-go" size={30} color="#363434"/>
              </TouchableOpacity>
            </View>
            <View style={styles.overlap}>
              <Text style={styles.pokemonType}>{`${pokemon.classification}`}</Text>
            </View>
          </View>
          <Text
            style={styles.welcome}
          >{pokemon.evolutions && pokemon.evolutions.length > 0 ? 'EVOLUTIONS' : 'HAS NO EVOLUTIONS'}</Text>
          {
            pokemon.evolutions && pokemon.evolutions.map(evolution =>
              <View style={styles.evolutionContainer} key={evolution.name}>
                <TouchableOpacity
                  accessibilityLabel="Go to pokemon details"
                  accessibilityComponentType="button"
                  accessibilityTraits="button"
                  onPress={() => props.navigation.push('Details', { pokemon: evolution })}
                  style={styles.button}
                >
                  <Icon name="pokeball" size={30} color="#ffffff" style={styles.icon}/>

                  <Text
                    style={styles.evolution}
                  >{`${evolution.name}`}</Text>
                </TouchableOpacity>
              </View>
            )
          }
        </View>
      ) : null}
    </View>
  );
}

DetailsScreen.navigationOptions = ({ navigation }): Title => {
  const pokemon = navigation.getParam('pokemon', undefined);
  return {
    title: pokemon.name,
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#595959',
    flex: 1,
    padding: 10,
  },
  modalButtonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalButton: {
    height: 60,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
    fontWeight: '800',
    color: 'white',
  },
  pokemonType: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
  overlap: {
    position: 'absolute',
    bottom: -20,
    right: 20,
    backgroundColor: '#363434',
    padding: 5,
    borderRadius: 5,
  },
  imageContainer: {
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: { width: '50%', height: 200 },
  parentView: { flex: 1 },
  evolutionContainer: {
    backgroundColor: '#363434',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  evolution: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
});
