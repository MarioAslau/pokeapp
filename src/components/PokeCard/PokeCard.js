/**
 * @flow
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import theme from '../../theme/theme';

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
type Props = {
  pokemon: Pokemon,
};

export default function PokeCard(props: Props): React$Node {
  const [buttonState, setButtonState] = useState(false);
  const { pokemon } = props;
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={{
            uri: pokemon.image,
          }}
        />
        <Text style={styles.data}>{pokemon.name.toUpperCase()}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            accessibilityLabel="Open/Close PokeCard"
            accessibilityComponentType="button"
            accessibilityTraits="button"
            activeOpacity={0.8}
            onPress={() => setButtonState(!buttonState)}
            style={styles.cardButton}
          >
            <Text style={styles.buttonText}>{!buttonState ? '+' : '-'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {buttonState ? (
        <View style={styles.extraInformation}>
          <Text style={styles.data}>NUMBER: {pokemon.number}</Text>
          <Text style={styles.data}>
            CLASSIFICATION: {pokemon.classification}
          </Text>
          <Text style={styles.data}>TYPE: {pokemon.types[0]}</Text>
          <Text style={styles.data}>HP: {pokemon.maxHP}</Text>
          <Text style={styles.data}>CP: {pokemon.maxCP}</Text>
          <Text style={styles.data}>WEIGHT: {pokemon.weight.maximum}</Text>
          <Text style={styles.data}>HEIGHT: {pokemon.height.maximum}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.baseColors.detailContainer,
    borderRadius: 10,
    padding: theme.padding.base,
    shadowColor: theme.baseColors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    marginBottom: 25,
  },
  extraInformation: {
    backgroundColor: theme.baseColors.detailContainerLight,
    borderRadius: 10,
    padding: theme.padding.base,
    width: '100%',
  },
  image: { width: '100%', height: 200 },
  data: {
    fontSize: 18,
    color: theme.baseColors.white,
    fontWeight: '600',
    marginBottom: 10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: -20,
    right: 20,
  },
  cardButton: {
    backgroundColor: theme.baseColors.buttonBasic,
    width: 60,
    height: 60,
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: theme.baseColors.white,
    fontSize: 40,
    fontWeight: '400',
  },
});
