import React, { useState } from 'react';
import { View, StyleSheet, PanResponder, Animated } from 'react-native';

const ForceUpdate  = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {
      setPosition({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderRelease: () => {
      setPosition({ x: 0, y: 0 });
    }
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.box, { transform: [{ translateX: position.x }, { translateY: position.y }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default ForceUpdate ;
