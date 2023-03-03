import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AddTask from './src/AddTask';
import DeleteItemModal from './src/DeleteItemModal';
import ItemList from './src/ItemList/ItemList';

export default function App() {

  const [item, setItem] = useState([]);

  const addTask = (text) => {
    setItem (oldArry => [...oldArry, {id: Date.now(), value: text}]);
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const deleteTask = (id) => {
    setItem (oldArry => oldArry.filter((item) => item.id !== id));
    setModalVisible(false);
    setSelectedItem(null);
  }
  
  const openModal  = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  }

  const cancel = () => {
    setModalVisible(false);
    setSelectedItem(null);
  }

  return (
    <View style={styles.screen}>
      <AddTask addTask={addTask}/>
      <DeleteItemModal selectedItem={selectedItem} deleteTask={deleteTask} modalVisible={modalVisible} cancel={cancel}/>
      <ItemList item={item} openModal={openModal}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40,
    height: '100%',
    backgroundColor: '#fbf6ef',
  },
});

