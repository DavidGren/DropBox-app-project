import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBEiPkOePwy1Pjq_6lt2oCjwc9MFX-phN8',
  authDomain: 'crested-lexicon-224323.firebaseapp.com',
  databaseURL: 'https://crested-lexicon-224323.firebaseio.com',
  projectId: 'crested-lexicon-224323',
  storageBucket: 'crested-lexicon-224323.appspot.com',
  messagingSenderId: '465994456077',
};
firebase.initializeApp(config);

const auth = firebase.auth();
const { currentUser } = auth;

export {
  auth,
  currentUser,
};
