let clintId = "8PEP69WFcYV--YJFZ-9E9JOZYARap-hV4K8ys7EuI-o";
let numberOfData = 30;
const endPoint = `https://api.unsplash.com/photos/random/?count=${numberOfData}&client_id=${clintId}`;

fetch(endPoint)
  .then((res) => res.json())
  .then((res) => {
    res.map((cardData) => {
      document.querySelector(".post-list").innerHTML += `<div class="post-card">
<div class="card-top">
  <img
    width="34px"
    height="34px"
    src="${cardData.user.profile_image.small}"
    alt=""
  />
  <div class="user-info">
    <span class="name-lastName"
      >${cardData.user.name}
      <img
      width="15px"
      height="15px"
      src="./icons/verified.png"
      alt="" />
      </span
    ><span class="loction">${cardData.user.location}</span>
  </div>
</div>
<div class="card-img">
       <img
height="375px"
src="${cardData.urls.small}"
alt=""
/>
</div>
<div class="card-bottom">
  <div class="icons">
  <i class="fa-regular fa-heart like" onclick="liked()"></i>
    <img
      width="23px"
      height="22px"
      src="./icons/chat.png"
      alt=""
    /><img
      width="23px"
      height="22px"
      src="./icons/send_9363090.png"
      alt=""
    />
  </div>
  <b class="likes">${cardData.likes} likes</b>
  <p class="desc"><span class="user-name">${cardData.user.username}</span> ${cardData.description}</p>
</div>
</div>`;
    });
  });

let menu = document.querySelector(".nav-profile");
let sidBar = document.querySelector(".sidbar");
let postList = document.querySelector(".post-list");
let links = document.querySelectorAll(".link");
menu.addEventListener("click", () => {
  sidBar.classList.toggle("hidden");
  postList.classList.toggle("hidden");
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    sidBar.classList.add("hidden");
    postList.classList.remove("hidden");
  });
});

const firebaseConfig = {
  apiKey: "AIzaSyD80opEd6V1Bdm2yvcRdMUt5BiYchTT78M",
  authDomain: "oldagramassets.firebaseapp.com",
  projectId: "oldagramassets",
  storageBucket: "oldagramassets.appspot.com",
  messagingSenderId: "50065021681",
  appId: "1:50065021681:web:d2578c65afa504a73be750",
};
firebase.initializeApp(firebaseConfig);
function uploadImage() {
  const ref = firebase.storage().ref();
  const file = document.querySelector("#files").files[0];
  const name = file.name;
  const metadata = {
    contentType: file.type,
  };
  const task = ref.child(name).put(file, metadata);
  task.then(alert("your image successfully uploded")).catch(console.error);
}
