import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList ,Platform} from 'react-native';

const ProductCard = ({product}) => {
  return (
    <View>
        <Text style= {{color : "white"}}>{product.id}</Text>
        <Text style= {{color : "white"}}>{product.thumbnail}</Text>
        <Text style= {{color : "white"}}>{product.brand}</Text>

    </View>
  )
}

export default ProductCard