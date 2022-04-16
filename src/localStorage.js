import AsyncStorage from '@react-native-async-storage/async-storage';


async function getItem(key){
    try {
        const result = await AsyncStorage.getItem(key)
        if(result !== null){
            return JSON.parse(result)
        }
        return undefined
    } catch(error) {
        return undefined
    }
}


async function setItem(key, value){
    try {
        value = JSON.stringify(value)
    } catch(error) { }
    return AsyncStorage.setItem(key, value)
}


export default {
    getItem,
    setItem,
}