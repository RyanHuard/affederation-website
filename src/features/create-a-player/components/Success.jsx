import React from "react";
import MainLayout from "../../../components/layout/MainLayout";
import Header from "./Header";

const Success = () => {
  return (
    <MainLayout header={<Header />}>
      <div className="mx-auto text-center">
        <h1 className="pb-6 text-3xl font-bold">Success!</h1>
        <h2 className="text-lg font-semibold">
          Thank you for your purchase. You will receive an email when your
          player is selected in the draft
        </h2>
      </div>
    </MainLayout>
  );
};

export default Success;
