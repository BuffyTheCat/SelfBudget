import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { THEME } from '../../theme'

const CustomButton = ({ onButtonPress, text }) => {

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={onButtonPress}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
        width: '70%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 15,
        backgroundColor: THEME.YELLOW_COLOR,
        shadowColor: THEME.BROWN_COLOR,
        shadowRadius: 10,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        elevation: 8,
    }
})

export default CustomButton;