import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyA6oHwAtevqU92vGBHVhxU4lJrYo2TI_C8",
  authDomain: "testreactfire.firebaseapp.com",
  databaseURL: "https://testreactfire.firebaseio.com",
  projectId: "testreactfire",
  storageBucket: "testreactfire.appspot.com",
  messagingSenderId: "908423657399"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth