import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { getFirestore, collection, getDocs } from "@firebase/firestore";

import MainLayout from "../layout/MainLayout";
import { auth } from "/src/firebase.js";

const ProtectedRoute = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [manager, setManager] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      setUser(authUser);
    

      if (authUser) {
        const managerStatus = await isManager(authUser.uid);
        setManager(managerStatus);
        setLoading(false); // Once the auth state is determined, set loading to false
      }
    });

    return () => unsubscribe();
  }, []);

  // While loading, render a loading indicator or null
  if (loading) {
    return null; // or render a loading indicator
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  // Once loading is complete, render based on user authentication status and manager status
  return manager ? <Outlet isLoading={loading}/> : <Navigate to="/" />;
};

export const isManager = async (uid) => {
  const db = getFirestore();
  const colRef = collection(db, "managers");
  const querySnapshot = await getDocs(colRef);

  return querySnapshot.docs.some(manager => manager.data().uid === uid);
};



export default ProtectedRoute;
