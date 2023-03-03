import { StyleSheet, View, TextInput} from 'react-native'
import React, {useEffect, useState} from 'react'
import Button from './Button'

const AddTask = ({addTask}) => {
    
    const [itemText, setItemText] = useState('');
    const onChangeText = (text) => {
        setItemText(text);
    }

    return (
        <View style={styles.container}>
        <TextInput style={styles.inputContainer} 
        placeholder='Añadi una nueva tarea'
        styles={styles.input}
        onChangeText={onChangeText}
        value={itemText}
        />
        <Button title='Agregar' onPress={()=>{addTask(itemText)}}/>
        </View>
    )
}

export default AddTask

const styles = StyleSheet.create({
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
})