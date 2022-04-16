import React from 'react'
import { View, Text } from 'react-native';

import { StyleSheet } from 'react-native';

const style =  StyleSheet.create({
    started: {
        color: '#aaa',
        fontSize: 30,
        marginBottom: 15,
    },
    no_started: {
        color: '#0000',
        fontSize: 30,
        marginBottom: 20,
    },

})

const Tags = props => {

    const { started } = props

    return (
        <View style={[started ? style.started : style.no_started]}>
            <Text style={started ? style.started : style.no_started}>Focus</Text>
        </View>
    )
}

export default Tags