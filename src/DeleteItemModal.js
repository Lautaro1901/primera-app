import { StyleSheet, Text, View, Modal, Button} from 'react-native'
import React from 'react'

const DeleteItemModal = ({modalVisible, selectItem, deleteTask, setModalVisible, setSelectedItem}) => {
    return (
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
                    console.log(selectItem)
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
    )
}

export default DeleteItemModal

const styles = StyleSheet.create({
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
})

