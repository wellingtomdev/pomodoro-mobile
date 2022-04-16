import { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';

const style =  StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '100%',
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#555',
    },
    subtitle: {
        fontSize: 15,
        color:'#555',
    },
    display: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 40,
        marginTop: 40,
    },
    counter: {
        alignItems: 'center',
    },
    tag: {
        fontSize: 20,
        color:'#555',
        marginBottom: 30,
    },
    arrow_button: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#555',
        marginBottom: 10,
        lineHeight: 30,
        padding: 10,
    },
    time: {
        fontSize: 50,
    },
})


function Arrow(props){
    const {style, onPress} = props
    const direction = props.direction === undefined ? true : props.direction
    return <Text onPress={onPress} style={style}>{direction ? '+' : '-'}</Text>
}

function Counter(props){

    const [time, setTime] = useState(props.initial || 0)
    
    function sum(n){
        if(time + n > 0){
            setTime(time + n)
            props.modifyNewValue(time+ n)
        }
    }

    return (
        <View className='counter'>
            <View>
                <Text style={style.tag}> {props.tag || ''} </Text>
            </View>
           
            <View style={style.counter}>
                <View>
                    <Arrow onPress={()=>sum(+1)} direction={true} style={style.arrow_button}/>
                </View>
                <View>
                    <Text style={style.time}>
                        {time}
                    </Text>
                </View>
                <View>
                    <Arrow onPress={()=>sum(-1)} direction={false} style={style.arrow_button}/>
                </View>
            </View>
           
        </View>
    )

}


const TimerSelect = props => {

    let focusTime = props.initialFocusTime || 25
    let breakTime = props.initialBreakTime || 5

    const externGetTime = props.getTime

    externGetTime(getTime)

    function getTime(){
        return {focusTime, breakTime}
    }

    return (
        <>
            <View id="timer-select" style={style.container}>
                <Text style={style.title}>Time configuration</Text>
                <Text style={style.subtitle}>( In minutes )</Text>
   
                <View style={style.display}>
                    <Counter
                        tag='Focus'
                        initial={focusTime}
                        modifyNewValue={value=>{focusTime = value}}
                    />
                    <Counter
                        tag='Break'
                        initial={breakTime}
                        modifyNewValue={value=>{breakTime = value}}
                    />
                </View>
            </View>
        </>
    )
}

export default TimerSelect