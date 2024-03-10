// import { SwipeableDrawer } from "@mui/material";
// import { useEffect, useState } from "react";
import { useState } from "react";
import "./App.css";
// import SwipeableEdgeDrawer from "./components/SwipeableEdgeDrawer";
import Fab from "./components/fab/Fab";
import Navbar from "./components/navbar/Navbar";
// import { initializeApp } from "firebase/app";
// import firebase from "firebase/compat/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import UserContext from "./utils/context/UserContext";

function App() {
  // const [isPhone, setIsPhone] = useState(isPhoneSize());
  const [user, setUser] = useState<firebase.User | null>(null);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsPhone(isPhoneSize());
  //   };

  //   // Add event listener for window resize
  //   window.addEventListener("resize", handleResize);

  //   // Remove event listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  firebase.initializeApp({
    apiKey: "AIzaSyBq2Exm-Efgl0GunYCVJaZbyYuwJ6JIVZc",
    authDomain: "assignment-freshly-brewed.firebaseapp.com",
    projectId: "assignment-freshly-brewed",
    storageBucket: "assignment-freshly-brewed.appspot.com",
    messagingSenderId: "153034519467",
    appId: "1:153034519467:web:e5ad635a56cbdfc16318ee",
  });

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <UserContext.Provider value={{ loggedUser: user }}>
      <div className="body-container">
        <Navbar signInWithGoogle={signInWithGoogle} signOut={signOut} />
        <Fab />
        {/* <div style={{ height: "100vh" }}> */}
        {/* </div> */}
        {/* <SwipeableDrawer
        onOpen={() => console.log("Open")}
        onClose={() => console.log("Close")}
      />
      <button>open</button> */}
      </div>
    </UserContext.Provider>
  );
}

export default App;
