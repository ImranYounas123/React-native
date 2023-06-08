import React, { useState } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';

const TouchableHighlightComponent = () => {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        underlayColor="lightblue"
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableHighlight>
      <Text style={styles.countText}>Count: {count}</Text>
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
  countText: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default TouchableHighlightComponent;
