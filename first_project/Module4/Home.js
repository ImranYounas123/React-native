import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Button, FlatList, Platform } from 'react-native';
import MyButton from './ComponentsWithPlatformSpecificVersions/MyButton.android';
import ConditionalRendering from './ComponentsWithPlatformSpecificVersions/conditionalRendering';

const Home = () => {
  const navigation = useNavigation();
  const data = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
    { id: 4, title: 'Item 4' },
    { id: 5, title: 'Item 5' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Details', { item })}
    >
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View>
       <View style= {{margin : 30}}>
       <MyButton title={"touch"} onPress={() => navigation.navigate("touch")} />
       </View>
        <ConditionalRendering title={"pan"} onPress={() => navigation.navigate("pan")} />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Plateforms')}
      >
        <Text style={styles.title}>Plateforms</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 16,
  },
  details: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
export default Home