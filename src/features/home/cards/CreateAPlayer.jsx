import { Card } from "@chakra-ui/react";
import React from "react";

import playerEditor from "../../../assets/player-editor.png";
import Button from "../../../components/button/Button";
import { Link, useNavigate } from "react-router-dom";

const CreateAPlayer = () => {
  const navigate = useNavigate();
  return (
    <Card borderRadius="sm" className="drop-shadow-md">
      <div className="flex">
        <img src={playerEditor} className="w-[8.2rem] rounded-l-sm object-cover" />
        <div className="p-6 mx-auto">
          <h1 className="text-center text-2xl font-bold">CREATE A PLAYER</h1>
          <p className="mt-6 text-center">Create your unique superstar</p>
          <div className="mt-6 text-center">
            <Button onClick={() => navigate("/create-a-player")}>GET STARTED</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CreateAPlayer;
