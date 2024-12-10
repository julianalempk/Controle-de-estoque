// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA2Ll1WVTHQTYJdrb41iyi149hevffckP8",
  authDomain: "controle-de-estoque-f02c3.firebaseapp.com",
  projectId: "controle-de-estoque-f02c3",
  storageBucket: "controle-de-estoque-f02c3.firebasestorage.app",
  messagingSenderId: "882907542528",
  appId: "1:882907542528:web:32ba69af274f5c2c5a14e5"
};

// Inicialização do Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();