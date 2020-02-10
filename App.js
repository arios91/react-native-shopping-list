import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Text, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import {uuid} from 'uuidv4';

const App = () => {

  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Chicken'},
    {id: uuid(), text: 'Bread'},
  ]);

  const deleteItem = (id) => {
    setItems(previousItems => {
      return previousItems.filter(item => item.id !== id);
    });
  }

  const addItem = (text) => {
    if(!text){
      Alert.alert('Invalid Input', 'Enter a valid item', [
        {text: 'OK'},
      ],
      {cancelable: false},);
    }else{
      setItems(previousItems => {
        return [{id: uuid(), text}, ...previousItems];
      })
    }
  }

  return(
    <View style={styles.container}>
      <Header/>
      <AddItem addItem={addItem}/>
      <FlatList 
        data={items}
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container : {
    flex: 1
  }
})

export default App;