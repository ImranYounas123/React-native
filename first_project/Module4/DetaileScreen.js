import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList ,Platform} from 'react-native';

const DetaileScreen = ({route}) => {
    const { item } = route.params;

    return (
      <View style={styles.container}>
        <Text style={styles.details}>{item.title}</Text>
      </View>
    );
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
export default DetaileScreen