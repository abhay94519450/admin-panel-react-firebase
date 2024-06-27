// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyAdMrcFDpKBsAE_mgMmzeuUcJHi1W4co1o",
  authDomain: "inifibackojj.firebaseapp.com",
  databaseURL: "https://inifibackojj-default-rtdb.firebaseio.com",
  projectId: "inifibackojj",
  storageBucket: "inifibackojj.appspot.com",
  messagingSenderId: "317047502444",
  appId: "1:215078169100:web:61f5a720a5ff127b645c29",
  measurementId: "G-XWCJ1BKJY0"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
