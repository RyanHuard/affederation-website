import React from "react";
import MainLayout from "../layout/MainLayout";

const ProtectedRoute = ({ children }) => {
  const teamId = parseInt(localStorage.getItem("teamId"));
  if (teamId >= 0 && teamId <= 9) {
    return children;
  }
  return (
    <MainLayout>
      <h1 className="font-semibold text-xl text-center">Please make sure to log in to access the free agency room!</h1>
    </MainLayout>
  );
};

export default ProtectedRoute;
