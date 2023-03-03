import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'

const Button = ({onPress,title}) => {
    return (
        <Pressable
        onPress={onPress}
        style={styles.button}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        backgroundColor: '#cbdfbd',
        padding: 0,
        borderRadius: 50,
        margin: 10,
    },
    text: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})