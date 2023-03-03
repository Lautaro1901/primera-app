import React from 'react'
import { FlatList } from 'react-native'
import Item from './Item'

const index = ({item}) => {
    return (
        <FlatList
            contentContainerStyle={{marginTop: 40, width: '100%', alignItems: 'center', justifyContent: 'center'}}
            data={item}
            renderItem={itemData => (
                <Item itemData={itemData}/>
                )}
            keytExtractor={item => item.id.toString(
            )}
        />
    )
}

export default index