importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

// Initialize Aplu
const apluPushConfig = {
    apiKey: "AIzaSyAB3-Ov82oFmXECbDAH5o9zT4HHguQrDGo",
	authDomain: "aplu-a1.firebaseapp.com",
	projectId: "aplu-a1",
	storageBucket: "aplu-a1.firebasestorage.app",
	messagingSenderId: "596370755309",
	appId: "1:596370755309:web:9b8ca7c9901912c1a806e4"
};

try {
    importScripts('https://push.aplu.io/import-aplu-messaging.js');
} catch (err) {
    console.warn("Couldn't load aplu-script, falling back: ", err);
}