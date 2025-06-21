// التهيئة
const firebaseConfig = {
  apiKey: "AIzaSyB6xugoYmXmg7ePUHPm26DXFgS9s1MCPu0",
  authDomain: "tasks-b4f68.firebaseapp.com",
  projectId: "tasks-b4f68",
  storageBucket: "tasks-b4f68.firebasestorage.app",
  messagingSenderId: "11047072306",
  appId: "1:11047072306:web:01fe4691f8939d51ef822b",
  measurementId: "G-C9Q5NTFGK5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// متغير لحفظ حالة الاشتراك
let tasksUnsubscribe = null;