// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAMz1NU4T2Ttgc_DtULc2NWyeEsR78vpbc",
  authDomain: "my-rn-project-e561b.firebaseapp.com",
  databaseURL: "https://my-rn-project-e561b-default-rtdb.firebaseio.com/",
  projectId: "my-rn-project-e561b",
  storageBucket: "my-rn-project-e561b.appspot.com",
  messagingSenderId: "128474385014",
  appId: "1:128474385014:android:045e04118475e7aff5ed57",
  measurementId: "406895076",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
