import { Button, Card } from "@chakra-ui/react";
import React from "react";

import playerEditor from "../../../assets/player-editor.png";

const CreateAPlayer = () => {
  return (
    <Card className="h-48" bg="white" border="1px" borderRadius="0">
      <div className="flex">
        <img src={playerEditor} className="h-48 w-[8.2rem] rounded" />
        <div className="p-6">
          <h1 className="text-center text-2xl font-bold">CREATE A PLAYER</h1>
          <p className="mt-4 text-center">
            Customize and build your unique superstar.
          </p>
          <div className="mt-4 text-center">
            <Button
              className="inline-block"
              bgColor="#013369"
              color="#ffffff"
              borderRadius="none"
              fontSize="15px"
            >
              GET STARTED
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CreateAPlayer;
