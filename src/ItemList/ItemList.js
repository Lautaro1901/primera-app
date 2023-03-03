import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Item from './Index'

const ItemList = ({item, openModal}) => {
    return (
        <FlatList
            contentContainerStyle={{marginTop: 40, width: '100%', alignItems: 'center', justifyContent: 'center'}}
            data={item}
            renderItem={itemData => (
            <Item itemData={itemData} openModal={openModal}/>)}
            keytExtractor={item => item.id.toString()}
        />
    )
}


export default ItemList

const styles = StyleSheet.create({})

