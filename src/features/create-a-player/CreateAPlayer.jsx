import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { Input, Textarea } from "@chakra-ui/react";

const CreateAPlayer = () => {
  return (
    <MainLayout>
      <div className="flex h-screen flex-col gap-6 bg-white p-6">
        <div className="flex gap-6">
          <div className="w-full">
            <h2>First Name</h2>
            <Input variant="filled" />
          </div>
          <div className="w-full">
            <h2>Last Name</h2>
            <Input variant="filled" />
          </div>
        </div>
        <div>
          <h2>Name</h2>
          <Input variant="filled" placeholder="Name" />
        </div>
      </div>
    </MainLayout>
  );
};

export default CreateAPlayer;
