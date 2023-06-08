import { StyleSheet, Text, View, Button, Platform,StatusBar, FlatList, Image } from 'react-native';
import React from 'react'

const PlatformSpecificComponents = () => {
    const platformMessage = Platform.select({
        ios: 'Hello iOS User!',
        // android: 'Hello Android User!',
        default: 'Hello User!'
      });
      const plateFormImage = Platform.select({
        // android : require("../assets/And.png"),
        ios : require("../assets/Ios.png"),
        default : require("../assets/Ios.png")
      })
      
  const plateFormRenderComponents = () => {
    if (Platform.OS === "ios") {
      return  <Text>Hello Ios User</Text>
    } else if (Platform.OS === "android") {
      return <Text>Hello Android User</Text>
    } else {
      return <Text>Welcome in this Application</Text>
    }
  }
  return (
    <View>
        <Text>PlatformSpecificComponents</Text>
        <Text>{plateFormRenderComponents()}</Text>
      <Text>{platformMessage}</Text>
        <Image source={plateFormImage} />
    </View>
  )
}

export default PlatformSpecificComponents