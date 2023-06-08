import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

const GestureResponderSystem = () => {
  const [message, setMessage] = useState('No gesture detected');

  const handlePress = () => {
    setMessage('Button Pressed');
  };

  const handleLongPress = () => {
    setMessage('Button Long Pressed');
  };

  const handleSwipe = () => {
    setMessage('Swipe Detected');
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress} onLongPress={handleLongPress} onSwipe={handleSwipe}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Press and Hold</Text>
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default GestureResponderSystem;
