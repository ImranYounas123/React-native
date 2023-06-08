import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList, Platform } from 'react-native';
import ButtonComp from './Module3/ButtonComp';
import { useEffect, useState } from 'react';
// import Testing from './Module3/Testing';
// import BgImage from './Module3/BgImage';
// import ProductList from './Module3/ProductList';
// import Todo from './Module3/Todo';
// import TextAndImageComponent from './Module4/TextAndImageComponent';
// import TouchGestureComponent from './Module4/TouchGestureComponent';
// import ForceUpdate from './Module4/ForceUpdate ';
// import TouchableHighlightComponent from './Module4/TouchableHighlightComponent';
// import GestureResponderSystem from './Module4/GestureResponderSystem';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Module4/Home';
import DetaileScreen from './Module4/DetaileScreen';
import PlatformSpecificComponents from './Module4/PlatformSpecificComponents';
import PanResponderComp from './Module4/PanResponderComp';
import TouchGestureComponent from './Module4/TouchGestureComponent';

const Stack = createStackNavigator();
export default function App() {
  const [count, setCount] = useState(0)
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const [products, setProducts] = useState([])
  function increment() {
    setCount(count + 1)
  }
  function reset() {
    setCount(0)
  }
  function decrement() {
    setCount(count - 1);
    if (count <= 0) {
      setCount(0)
    }
  }
  const onChangeData = (newTodo) => {
    setTodo(newTodo);
  }
  const addTodo = () => {
    setTodos([...todos, todo])
    setTodo('')
  }

  const fetchData = async () => {
    await fetch('https://dummyjson.com/products').then(res => res.json()).then((result) => {
      setProducts(result.products)
    })
  }
  useEffect(() => {
    fetchData();
  }, [])
  // const renderItem = (value) => {
  //   <Text style={{ fontSize: 30, color: "white" }}>
  //     {value}
  //   </Text>
  // }
  const deleteTodo = (id) => {
    todos.splice(id)
  }
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={DetaileScreen} />
          <Stack.Screen name="Plateforms" component={PlatformSpecificComponents} />
          <Stack.Screen name="pan" component={PanResponderComp} />
          <Stack.Screen name="touch" component={TouchGestureComponent} />

        </Stack.Navigator>
      </NavigationContainer>
      {/* <ButtonComp  count = {count} increment = {increment} decrement ={decrement} reset = {reset}/> */}
      {/* <BgImage /> */}
      {/* <Image style = {styles.img}
        source={require("./assets/profile-picture.jpeg")}
        /> */}
      {/* <Testing /> */}
      {/* <ProductList products={products}  /> */}
      {/* <Todo /> */}
      <StatusBar />
      {/* <TextAndImageComponent /> */}
      {/* <TouchGestureComponent /> */}
      {/* <ForceUpdate /> */}
      {/* <TouchableHighlightComponent  />  */}

      {/* <GestureResponderSystem /> */}


      {/* <Image style={{
        position: 'absolute',
        height: "100%",
        width: "100%",
        flex: 1,
        resizeMode: 'cover',
      }} source={require("./assets/profile-picture.jpeg")} />
      <Text style={{ fontSize: 30, color: "white" }}>{JSON.stringify(Platform.constants,null,2)}</Text>
      <TextInput value={todo} onChangeText={onChangeData} placeholder='enter value' cursorColor={'white'} style={{ marginBottom: 10, color: "white", width: "80%", height: "10%", borderBottomWidth: 4, borderColor: "red" }} />
      <View style={{ width: "50%", marginVertical: 20 }}>
        <Button color={'green'} title='Add Todo' onPress={addTodo} />
      </View>
      <View style = {{flex : 1}}>
        <FlatList
          data={todos}
          renderItem={({ item , index}) => (
            <View style={styles.item}>
              <Text style={{ color: "white" , marginHorizontal : 50}}>{item}</Text>
              <Button title='delete' color={'blue'} onPress={()=> 
              setTodos((previous) => {
                const newTodos = [...previous];
                newTodos.splice(index,1)
                return newTodos;
              })
              } />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    color: "white",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 3
  },
  img: {
    position: "absolute",
    width: "100%",
    height: "100%",

  }
});
