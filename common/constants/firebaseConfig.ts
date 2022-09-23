import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCChKR9kyCpfIMzfQtbIDFySaN7t2L9sSU',
  authDomain: 'podsnieznikiem-c0743.firebaseapp.com',
  projectId: 'podsnieznikiem-c0743',
  storageBucket: 'podsnieznikiem-c0743.appspot.com',
  messagingSenderId: '1004213765196',
  appId: '1:1004213765196:web:dda440a11cc5c9b6fb60e9',
  measurementId: 'G-FCH655ZKPC'
};

export const getGoogleAnalytics = () => {
  if (typeof window !== 'undefined') {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    return analytics;
  }
};
