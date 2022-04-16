import * as Notifications from 'expo-notifications';
import { Audio } from 'expo-av';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function playSound() {
    const { sound } = await Audio.Sound.createAsync(require('../../assets/notificationSond.mp3'))
    await sound.playAsync();
}

async function notify({title, body, data}) {
  title = title || 'Notification'
  body = body || 'This is a notification'
  data = data || {}
  
  await Notifications.scheduleNotificationAsync({
    content: {title, body, data},
    trigger: { seconds: 1 },
  })
  playSound()
}


export function notifyFocus(){
    notify({
        title: 'In focus',
        body: 'Start of focus time',
        data: {}
    })
}


export function notifyBreak(){
    notify({
        title: 'Pause',
        body: 'Full focus time',
        data: {}
    })
}