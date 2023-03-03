import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const Item = ({itemData, openModal}) => {
    return (
        <Pressable style={styles.listItem} onPress={()=>{
            openModal(itemData.item);
            }}>
            <Text style={{margin: 10}}>{itemData.item.value}</Text>
        </Pressable>
    )
}

export default Item

const styles = StyleSheet.create({
    listItem: {
        width: 300,
        backgroundColor: '#ead7c3',
        margin: 4,
        padding: 10,
        borderRadius: 10,
    },
})