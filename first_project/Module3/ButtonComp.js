import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ButtonComp = (props) => {


  return (
    <>
      <Text>{props.count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="increament" onPress={() => props.increment()} color="green" />
        <Button title="decreament" onPress={() => props.decrement()} color="blue" />
        <Button title="Reset" onPress={() => props.reset()} color="grey" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    button: {
      backgroundColor: 'green',
      borderRadius: 8,
      padding: 10,
    },
  },
});

export default ButtonComp;
