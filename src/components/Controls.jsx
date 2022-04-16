import React from 'react'
import { View, Text, Touchable } from 'react-native';
// import style from '../styles/App'

import { StyleSheet } from 'react-native';

const style =  StyleSheet.create({
    started: {
        color: '#f5f5f5',
    },
    constrols: {
        flexDirection: 'row',
    },
    controls__bot: {
        color: '#282830',
        margin: 10,
        // backgroundColor: "#0002",
        borderColor: "#999",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 30,
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 30,
        lineHeight: 40,
    }
})


function Bot({text, onClick, started}) {
    return (
        <Text style={[style.controls__bot, started ? style.started : null]} onClick={onClick} onPress={onClick}>
            {text}
        </Text>
    )
}


function firstUpper(str) {
    return str[0].toUpperCase() + str.slice(1)
}

const Controls = props => {

    const { started } = props
    const buttons = {...props.setup}
    const buttonNames = Object.keys(buttons)

    const buttonComponents = buttonNames.map(name => {
        return (
            <Bot 
                key={name}
                text={firstUpper(name)}
                onClick={buttons[name]}
                started={started}
            />
        )
    })


    return (
        <View style={style.constrols}>
            {buttonComponents}
        </View>
    )
}

export default Controls