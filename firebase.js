import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDTQZK6b6j079BfkNYavdL4u_BMT_xINA8',
  authDomain: 'chatapp-53b62.firebaseapp.com',
  projectId: 'chatapp-53b62',
  storageBucket: 'chatapp-53b62.appspot.com',
  messagingSenderId: '962908484120',
  appId: '1:962908484120:web:00ee5e9b271d9a6248096d',
  measurementId: 'G-VM9SKX5MB9',
};

const app = firebase.initializeApp(firebaseConfig);

const auth1 = auth();
const db = firebase.firestore();

export {db, auth1};
