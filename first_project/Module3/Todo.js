import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList, Platform } from 'react-native';

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const getTextOnChange = (newText) => {
        setTodo(newText)
    }
    const addToDo = () => {
        setTodos([...todos, todo]);
        setTodo('')
    }
    return (
        <View>
            <Text>Enter Todos</Text>
            <TextInput
                value={todo}
                onChangeText={getTextOnChange}
                placeholder='Enter youer Todos'
                style={{ color: "white" }}
            />
            <Button title='Add' color={'red'} onPress={addToDo} />
            <View>
                {
                    todos && todos.map((item, index) => {
                        return (
                            <View key={index} style={{}}>
                                <Text style={{ color: "white" }}>{item}</Text>
                                <Button title='delete' color={'green'} onPress={
                                    () => {
                                        setTodos((prevous) => {
                                            const upddatedata = [...prevous];
                                            upddatedata.splice(index, 1);
                                            return upddatedata;
                                        })
                                    }
                                } />
                            </View>
                        )
                    })
                }


            </View>
        </View>
    )
}

export default Todo