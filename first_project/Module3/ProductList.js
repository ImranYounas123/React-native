import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList, Platform } from 'react-native';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
    // console.log(products)
    return (
        <View>
            <FlatList
                data={products}
                renderItem={({ item }) => {
                    return (
                        <ProductCard key={item.id} product={item} />
                    )
                }}
                keyExtractor={(item) => item.id.toString()}
            />
            {/* <FlatList
                data={products}
                renderItem={({ item }) => {
                    return (
                        <ProductCard product={item} />
                    );
                }}
                keyExtractor={(item) => item.id.toString()}
            /> */}

        </View>
    )
}

export default ProductList