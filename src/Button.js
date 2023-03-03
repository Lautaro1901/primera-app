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

const styles = StyleSheet.create({})