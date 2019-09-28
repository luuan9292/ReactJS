// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

//Thong so config cua firebase
const firebaseConfig = {
  apiKey: "AIzaSyBXAoqITVsirGcVzPV7DIIn3tYjtoAX-8Y",
  authDomain: "task-manager-reactjs-af3b0.firebaseapp.com",
  databaseURL: "https://task-manager-reactjs-af3b0.firebaseio.com",
  projectId: "task-manager-reactjs-af3b0",
  storageBucket: "",
  messagingSenderId: "984718250542",
  appId: "1:984718250542:web:bb03da895507a542"
};

//Khoi tao doi tuong firebase voi tham so la config
export const firebaseApp = firebase.initializeApp(firebaseConfig);

//Tham chieu den Document tasks (auto create neu chua co)
export const tasksRef = firebase.database().ref("tasks");

//Tham chieu den Document tasksCompleted
export const tasksCompletedRef = firebase.database().ref("tasksCompletedRef");

//Tham chieu den Document usersRef chua info nguoi dung (trong day la website)
export const usersRef = firebase.database().ref("usersRef");




// Firebase set rule database, dang nhap roi thi moi doc ghi duoc
// {
//   "rules": {
//     ".read": "auth != null",
//     ".write": "auth != null"
//   }
// }
