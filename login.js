let name = document.getElementById("name");
let lastName = document.getElementById("lastname");
let password = document.getElementById("password");

let phoneNumber = document.getElementById("phone");
let btn = document.getElementById("loginBtn");
let isLogin = false
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyD80opEd6V1Bdm2yvcRdMUt5BiYchTT78M",
  authDomain: "oldagramassets.firebaseapp.com",
  databaseURL:
    "https://oldagramassets-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "oldagramassets",
  storageBucket: "oldagramassets.appspot.com",
  messagingSenderId: "50065021681",
  appId: "1:50065021681:web:d2578c65afa504a73be750",
};
const app = initializeApp(firebaseConfig);
let uuid = crypto.randomUUID().toString();
document.cookie = "id" + "=" + uuid;
import {
  getDatabase,
  ref,
  get,
  set,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
const db = getDatabase();

function AddData() {
  set(ref(db, `accounts/${uuid}`), {
      user: {
      name: name.value,
      lastName: lastName.value,
      phoneNumber: phoneNumber.value,
      password: password.value,
      id: uuid,
    },
  })
    .then(() => {
      window.location.href = "https://sulimanhakimi.github.io/instagram-post-clone/";
      isLogin= true
    })
    .catch((error) => {
      console.log(error);
    });
}

export default function getData() {
  get(ref(db, `accounts/`)).then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val();
    }
  });
}
btn.addEventListener("click", () => {
  if(isLogin==true) {
    btn.setAttribute("disabled", "disabled");
  }else{
    AddData()
  }
});


