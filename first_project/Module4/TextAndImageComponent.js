import React from 'react'
import { StyleSheet, Text, View, Button, Platform, StatusBar, FlatList, Image } from 'react-native';

const TextAndImageComponent = () => {
    return (
        <View style={styles.container}>
           <View >
           <Text style={styles.item}>Image</Text>
           </View>
            {/* <Image style={styles.img}
                source={require("./assets/profile-picture.jpeg")}
            /> */}
        </View>
    )
}

export default TextAndImageComponent;

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: "row"
    },
    item: {
        textAlign: "center",
        alignItems: "center",
        fontSize: 20,
        margin: 10,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 100,
    }
});
