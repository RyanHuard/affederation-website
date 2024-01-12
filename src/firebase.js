// Import the functions you need from the SDKs you need
import { Google } from "@mui/icons-material";
import { initializeApp } from "@firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "@firebase/auth";
import { toast } from "react-toastify";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";

import { api } from "./lib/axios";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCekvP9PFSiwvgLa7OJBEwXTXChdIJsWh4",
  authDomain: "aff-website-890ce.firebaseapp.com",
  projectId: "aff-website-890ce",
  storageBucket: "aff-website-890ce.appspot.com",
  messagingSenderId: "533205865065",
  appId: "1:533205865065:web:90ebf37664defd1ee108f8",
  measurementId: "G-VFW41V4YHW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const email = result.user.email;
      const userId = result.user.uid;
      toast("Log In sucessful!");

      // Make a GET request to /api/authorization/{userId}
      api
        .get(`/authorization/${userId}`)
        .then((response) => {
          // Check if the userId matches the id in the database
          let team_city = response.data.team_location.replaceAll(" ", "-");
          let team_link =
            team_city.toLowerCase() +
            "-" +
            response.data.team_name.toLowerCase();

          if (response.data.isManager) {
            localStorage.setItem("isManager", "true");
            localStorage.setItem("team", `${team_link}`);
            localStorage.setItem("teamId", `${response.data.team_id}`);
            localStorage.setItem("pendingTrade", response.data.pending_trades);
          } else {
            localStorage.setItem("isManager", "false");
          }
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });

      localStorage.setItem("email", email);
    })
    .catch((error) => {
      console.log(error);
    });
    
};

export const signOutWithGoogle = () => {
  auth.signOut();
  toast("Log Out sucessful!");

  localStorage.removeItem("email");
  localStorage.removeItem("teamId");
  localStorage.removeItem("team");
  localStorage.removeItem("isManager");
};

export default app;
