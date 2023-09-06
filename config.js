// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "zb7ubADnHSXvUloGs0JUlZizEJt8DYyHW3DAMkSQ",
  authDomain: "my-rn-app-25cd8.firebaseapp.com",
  databaseURL: "https://my-rn-app-25cd8-default-rtdb.firebaseio.com/",
  projectId: "my-rn-app-25cd8",
  storageBucket: "my-rn-app-25cd8.appspot.com",
  messagingSenderId: "21800304938",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
