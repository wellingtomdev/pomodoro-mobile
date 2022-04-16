import React, {useState, useEffect} from 'react'
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import style from '../styles/App'

import Tags from './Tags'
import Timer from './Timer'
import Controls from './Controls'
import TimeSelect from './TimeSelect'

import methods from './methods'

const { timer, view, preferencies, buttonMethods, focusInSeconds } = methods

let page = 'home'

let externSetSecondsLeft = ()=>{}

setInterval(()=>{

    if(page === 'focus'){
        const secondsLeft = timer.secondsLeft()
        externSetSecondsLeft((secondsLeft === 0 && page === 'pause') ? focusInSeconds() : secondsLeft)
        // view.atualizeTitle(secondsLeft)
        return
    }
    if(page !== 'pause'){
        externSetSecondsLeft(focusInSeconds())
    }
    if(page !== 'focus'){
        // view.atualizeTitle(0)
    }

}, 500)

let externSetButtonsSetup = ()=>{}

function esbs(){ externSetButtonsSetup(pageButtons[page]) }

const pageButtons = {
    home: {edit: ()=>{ page = 'edit'; esbs(); buttonMethods.edit() }, play: ()=>{ page = 'focus'; esbs(); buttonMethods.play() }},
    edit: {cancel: ()=>{ page = 'home'; esbs(); buttonMethods.cancel() }, save: ()=>{ page = 'home'; esbs(); buttonMethods.save(getTime()) }},
    focus: {reset: ()=>{ page = 'home'; esbs(); buttonMethods.reset() }, pause: ()=>{ page = 'pause'; esbs(); buttonMethods.pause() }},
    pause: {reset: ()=>{ page = 'home'; esbs(); buttonMethods.reset() }, play: ()=>{ page = 'focus'; esbs(); buttonMethods.play() }},
}

let getTime = ()=>{}

function Display() {

    try {

        const [loaded, setLoaded] = useState(false)

        const [secondsLeft, setSecondsLeft] = useState(0)
        externSetSecondsLeft = setSecondsLeft
        
        const [buttonsSetup, setButtonsSetup] = useState(pageButtons[page])
        externSetButtonsSetup = setButtonsSetup

        const [started, setStarted] = useState(false)
        view.setStartedSetter(setStarted)

        preferencies.initied(times=>{
            if(!loaded){
                setLoaded(true)
                setSecondsLeft(focusInSeconds())
            }
        })


        if(!loaded){
            return (
                <View style={style.container}>
                   
                </View>
            )
        }

        return (
            <View id='container' style={[style.container, started ? style.container_started : null]}>
                <Tags style={style.tags} started={started}/>
                <View id="display" >
                    { page !== 'edit' ?
                    <Timer secondsLeft={secondsLeft} started={started}/>
                    :
                    <TimeSelect
                        getTime={value => getTime = value}
                        initialFocusTime={preferencies.times()?.focusTime}
                        initialBreakTime={preferencies.times()?.breakTime}
                    />
                    }
                    
                </View>
                <Controls setup={buttonsSetup} started={started}/>
            </View>
        )

    } catch (error) {
        console.error(error)
    }

}

export default Display



