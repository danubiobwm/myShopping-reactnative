import 'react-native-gesture-handler';
import '@react-native-firebase/app';
//import firestore from '@react-native-firebase/firestore';

import { registerRootComponent } from 'expo';

import App from './App';


/* if (__DEV__) {
  firestore().useEmulator('192.168.0.7', 8080);
}

const db = firestore(); */

registerRootComponent(App);



