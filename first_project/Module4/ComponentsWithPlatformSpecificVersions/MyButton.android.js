import React from 'react';
import { TouchableNativeFeedback, Text } from 'react-native';

const MyButton = ({ onPress, title }) => (
  <TouchableNativeFeedback onPress={onPress}>
    <Text>{title}</Text>
  </TouchableNativeFeedback>
);

export default MyButton;
