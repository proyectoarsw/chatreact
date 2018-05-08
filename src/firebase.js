
import * as firebase from 'firebase';

// should go in a secret file
const config = {
    apiKey: "AIzaSyDYwGeVI-1SVG5ZfmuPWzDbb5oflZ7iBRI",
    authDomain: "academic-timing-862.firebaseapp.com",
    databaseURL: "https://academic-timing-862.firebaseio.com",
    storageBucket: "academic-timing-862.appspot.com",
    messagingSenderId: "284650235729"
};
firebase.initializeApp(config);

export default firebase;