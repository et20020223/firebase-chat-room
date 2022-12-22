// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, onValue, DataSnapshot } from 'firebase/database'
import { v4 as uuidv4 } from 'uuid'
import { useDayjs } from '@/utils/day'

const dayjs = useDayjs()

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'xxxxxxxxxxxxxx_xxxxxxxxxxxxxx',
    authDomain: 'chat-room-xxxx.xxxxxxxx.com',
    projectId: 'chat-room-xxxx',
    storageBucket: 'chat-room-xxxx.xxxx.com',
    messagingSenderId: 'xxxxxxxxxxx',
    appId: '1:xxxxxxxxx:web:xxxxxxxxxxxxxxxx',
    measurementId: 'x-xxxxxxxxxx'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app)

// 建立資料庫ref
export const realtimeRef = ref(database, 'chatroom')

// 寫入 database
export const writeUserData = (username: string, message: string) => {
    set(ref(database, `chatroom/${dayjs().unix()}`), {
        key: uuidv4(),
        username,
        message,
        time: dayjs().unix()
    })
}

// get data once
// const dbRef = ref(database)
// export const getMessage = get(child(dbRef, 'chatroom')).then((snapshot) => {
//     if (snapshot.exists()) {
//         console.log('exists')
//         console.log(snapshot.val())
//         snapshot.forEach((childSnapshot) => {
//             const childKey = childSnapshot.key
//             const childValue = childSnapshot.val()
//             console.log('childKey: ', childKey)
//             console.log('childValue: ', childValue)
//         })
//     } else {
//         console.log('No data available')
//     }
// }).catch((error) => {
//     console.error(error)
// })

// 取得realtime database內的資料
export const listenerDatabase = () => {
    const starCountRef = ref(database, 'chatroom')

    onValue(starCountRef, (snapshot: DataSnapshot) => {
        const data = snapshot.val()
        console.log('data: ', data)
    }, (error) => {
        console.error(error)
    })
}
