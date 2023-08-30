import React from "react";
import MainLayout from "../../../components/layout/MainLayout";
import Header from "./Header";

const Cancel = () => {
  return (
    <MainLayout header={<Header />}>
      <div className="mx-auto text-center">
        <h1 className="font-bold text-3xl pb-6">Cancel</h1>
        <h2 className="font-semibold text-lg">Your payment was cancelled successfully.</h2>
      </div>
    </MainLayout>
  );
};

export default Cancel;
