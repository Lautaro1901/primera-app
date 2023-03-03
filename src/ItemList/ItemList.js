import React from 'react'
import { FlatList } from 'react-native'
import Item from './Index'

const index = ({item, openModal}) => {
    return (
        <FlatList
            contentContainerStyle={{marginTop: 40, width: '100%', alignItems: 'center', justifyContent: 'center'}}
            data={item}
            renderItem={itemData => (
                <Item itemData={itemData} openModal={openModal}/>
                )}
            keytExtractor={item => item.id.toString(
            )}
        />
    )
}

export default index