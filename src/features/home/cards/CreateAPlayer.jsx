import { Card } from "@chakra-ui/react";
import React from "react";

import playerEditor from "../../../assets/player-editor.png";
import Button from "../../../components/button/Button";

const CreateAPlayer = () => {
  return (
    <Card bg="white" borderRadius="sm" flex="37%" className="lg:w-2/5 drop-shadow-md h-full">
      <div className="flex">
        <img src={playerEditor} className="w-[8.2rem]" />
        <div className="p-6 mx-auto">
          <h1 className="text-center text-2xl font-bold">CREATE A PLAYER</h1>
          <p className="mt-6 text-center">Customize your unique superstar</p>
          <div className="mt-6 text-center">
            <Button>GET STARTED</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CreateAPlayer;
