import { StyleSheet, Text, View, Modal, Button} from 'react-native'
import React from 'react'

const DeleteItemModal = ({modalVisible, selectedItem, deleteTask, cancel}) => {

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
                    <Text>¿Está seguro que desea eliminar el item {selectedItem?.value}?</Text>
                </View>
                <View style={styles.modalActions}>
                    <Button style={styles.modalButton} title='Eliminar' onPress={()=>{
                    deleteTask(selectedItem.id)  
                    }}/>

                    <Button style={styles.modalButton} title='Cancelar' onPress={cancel} />
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
        backgroundColor: '#dce0d9',
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
        backgroundColor: '#dce0d9',
        margin: 10,
    },
    
    modalActions: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
})

