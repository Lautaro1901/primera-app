import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AddTask from './src/AddTask';
import DeleteItemModal from './src/DeleteItemModal';
import ItemList from './src/ItemList/ItemList';

export default function App() {

  const [itemText, setItemText] = useState('');
  const [item, setItem] = useState([]);

    const onChangeText = (text) => {
      setItemText(text);
    }

  const addTask = () => {
    setItem (oldArry => [...oldArry, {id: Date.now(), value: itemText}]);
    setItemText('');
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const deleteTask = (id) => {
    setItem (oldArry => oldArry.filter((item) => item.id !== id));
    setModalVisible(false);
    selectItem(null);
  }
  
  const selectItem = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  }

  return (
    <View style={styles.screen}>
      <AddTask onChangeText={onChangeText} addTask={addTask}/>
      <DeleteItemModal setModalVisible={setModalVisible} setSelectedItem={setSelectedItem} selectedItem={selectedItem} deleteTask={deleteTask} modalVisible={modalVisible}/>
      <ItemList item={item}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40
  },
});

