import React, { useEffect, useState } from 'react';
import { Button, FlatList, Text, StyleSheet, TextInput, View, Modal, Pressable } from 'react-native';

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

  const deleteTask = () => {
    setItem (oldArry => oldArry.filter((item) => item.id !== selectedItem.id));
    setModalVisible(false);
    selectItem(null);
  }
  
  const selectItem = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <TextInput style={styles.inputContainer} 
        placeholder='Añadi una nueva tarea'
        styles={styles.input}
        onChangeText={onChangeText}
        value={itemText}
        />
        <Button
        title='Agregar'
        onPress={addTask}
        />
      </View>
      <FlatList
      contentContainerStyle={{marginTop: 40, width: '100%', alignItems: 'center', justifyContent: 'center'}}
        data={item}
        renderItem={itemData => (
          <Pressable style={styles.listItem} onPress={()=>{
            selectItem(itemData.item);
          }}>
            <Text style={{margin: 10}}>{itemData.item.value}</Text>
          </Pressable>
          )}
        keytExtractor={item => item.id.toString(
        )}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
        <View style={styles.modalContainer}>
          <View style={styles.modalTitle}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}>Eliminar Item</Text>
          </View>
          <View style={styles.modalContent}>
            <Text>¿Está seguro que desea eliminar el item {selectItem?.value}?</Text>
          </View>
          <View style={styles.modalActions}>
            <Button style={styles.modalButton} title='Eliminar' onPress={()=>{
              deleteTask(selectItem.id)
              setModalVisible(false)
              }}/>

            <Button style={styles.modalButton} title='Cancelar' onPress={() => {
              setModalVisible(false)
              setSelectedItem(null);
            }} />
          </View>
        </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },

  inputContainer: { 
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 5,
    marginRight:5,
  },
  
  input: {
    width: '80%',
    padding: 10,
  },

  modalContainer: {
    width: '100%',
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#fbf6ef',
  },

  modalTitle: {  
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  modalContent: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbf6ef',
    margin: 10,
  },

  modalActions: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  listItem: {
    width: '100%',
    backgroundColor: '#ead7c3',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
});

