import { StyleSheet, Text } from 'react-native'
import React from 'react'

const Item = ({itemData}) => {
    return (
        <Pressable style={styles.listItem} onPress={()=>{
            selectItem(itemData.item);
            }}>
            <Text style={{margin: 10}}>{itemData.item.value}</Text>
        </Pressable>
    )
}

export default Item

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        backgroundColor: '#ead7c3',
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
})