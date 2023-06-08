import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, Text, Platform } from 'react-native';

const ConditionalRendering = ({ onPress, title }) => {
  const ButtonComponent = Platform.select({
    ios: TouchableOpacity,
    android: TouchableNativeFeedback,
    default: TouchableOpacity,
  });

  return (
    <ButtonComponent onPress={onPress}>
      <Text>{title}</Text>
    </ButtonComponent>
  );
};

export default ConditionalRendering;
