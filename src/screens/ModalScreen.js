import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableWithoutFeedback } from 'react-native';

export function ModalScreen(props) {
  const { navigation } = props
  const attacks = navigation.getParam('attacks', undefined);
  console.log('attacls', attacks)
  return (
    <TouchableWithoutFeedback
      accessibilityLabel="Go back"
      accessibilityComponentType="button"
      accessibilityTraits="button"
      onPress={() => navigation.goBack()}
      style={styles.container}

    >
      <View style={styles.container} >

        <View style={styles.card} >

          {
            attacks.fast.map(attack => <Text style={styles.attack} key={attack.name}>{attack.name}</Text>)
          }
          <Image style={styles.image} source={require('../assets/pics/pickatchu.jpeg')}/>
          <Button
            // onPress={() => navigation.goBack()}
            title="Ewww"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#403f3f',
    // height: '60%',
    width: '90%',
    borderRadius: 10,
    alignItems: 'center',
  },
  image: { width: '50%', height: 200 },
  attack: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
});
