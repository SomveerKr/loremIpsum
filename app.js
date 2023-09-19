const express = require('express');
const ejs = require('ejs');
// Import the functions you need from the SDKs you need
const { initializeApp } =require("firebase/app");
const { getFirestore, collection, getDocs } = require('firebase/firestore/lite');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6rJvCMOXXfDW91Em9RT8-XaaZkYJFsvk",
  authDomain: "loremipsum-1b74b.firebaseapp.com",
  projectId: "loremipsum-1b74b",
  storageBucket: "loremipsum-1b74b.appspot.com",
  messagingSenderId: "238832611838",
  appId: "1:238832611838:web:e4cc831799a126552c10af"
};

// Initialize Firebase
const fbApp = initializeApp(firebaseConfig);
const db = getFirestore(fbApp);



const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));


app.get("/", (req, res) => {
// Get a list of cities from your database
async function getPosts(db) {
  const postsCol = collection(db, 'posts');
  const postSnapshot = await getDocs(postsCol);
  const postList = postSnapshot.docs.map(doc => doc.data());
  
  res.render("home", {
    mainPost:postList[0],
  });
}
getPosts(db);
    
})
app.get("/post", (req, res) => {
  async function getPosts(db) {
    const postsCol = collection(db, 'posts');
    const postSnapshot = await getDocs(postsCol);
    const postList = postSnapshot.docs.map(doc => doc.data());

    res.render("post", {
      mainPost:postList[0],
    });
  }
    
    getPosts(db);
})

app.get("/about", (req, res) => {
  res.render("about")
});

app.get("/contact", (req, res) => {
  res.render("contact")
});




app.listen(3000, function () {
    console.log(`Example app listening on port 3000!`);
  });