import React from 'react'
import { View, Text } from 'react-native';
// import style from '../styles/App'

import { StyleSheet } from 'react-native';

const style =  StyleSheet.create({
    started: {
        color: '#f5f5f5',
    },
    timer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 10,
        marginBottom: 30,
        minWidth: 240,
    },
    timer__camp: {
        alignItems: "baseline",
        flexDirection: 'row',
    },
    timer__time: {
        fontSize: 60,
        color: '#282830',
    },
    timer__unid: {
        fontSize: 20,
        color: '#282830',
    },
});
    

const Timer = props => {

    const {secondsLeft, started} = props

    return (
        <View id="timer" style={style.timer}>
            <View className="camp"  style={style.timer__camp}>
                <View className='time' id="minute">
                    <Text style={[style.timer__time, started ? style.started : null]}>
                        {Math.floor(secondsLeft / 60) }
                    </Text>
                </View>
                <View className="unid">
                    <Text style={[style.timer__unid, started ? style.started : null]}>
                        min
                    </Text>
                </View>
            </View>
            <View className="camp"  style={style.timer__camp}>
                <View className='time' id="minute">
                    <Text style={[style.timer__time, started ? style.started : null]}>
                        {(secondsLeft % 60)}
                    </Text>
                </View>
                <View className="unid">
                    <Text style={[style.timer__unid, started ? style.started : null]}>
                        sec
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Timer