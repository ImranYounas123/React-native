import React from 'react'
import { StyleSheet, Text, View, Button, Platform,StatusBar, FlatList } from 'react-native';
// 1. API plateform
// 
const Testing = () => {
    const data = [
        {
          name : "Imran",
          age : 21
        },
        {
          name : "hasnain",
          age : 23
        },
     ]
    return (
        // <View>
        //     <Text>{Platform.OS}</Text>
        //     <Text>{Platform.Version}</Text>
        //     <Text>{Platform.isTV}</Text>
        //     <Text>{Platform.isTesting ? "Imran" : "khan"}</Text>
        //     <Text>{Platform.isPad ? "Imran" : "khan"}</Text>
        //     <Text>{JSON.stringify(Platform.constants)}</Text>
        // </View>
            <View>
                <StatusBar />
                <FlatList 
                data={data}
                renderItem={({item}) => {
                    return(
                        <>
                          <Text style = {{color : "#FFF"}}>{item.name}</Text>
                          <Text>{item.age}</Text>
                        </>
                    )
                }}
                keyExtractor={(item) => item.name.toString()}
                />
            </View>
    )
}

export default Testing