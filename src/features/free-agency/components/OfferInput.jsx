import React, { useState } from "react";
import {
  Card,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import Button from "../../../components/button/Button";
import { toast } from "react-toastify";

const OfferInput = ({
  currentPlayer,
  handleSubmitOffer,
  inputOffer,
  setInputOffer,
  finalOfferIsChecked,
  handleFinalOfferCheck,
  finalOfferChecks,
  numChecked
}) => {
  const handleInputChange = (e) => setInputOffer(e.target.value);

  
  return (
    <FormControl>
      <FormLabel>Offer</FormLabel>
      <Input
        bg="white"
        mb="4"
        rounded="0"
        className="drop-shadow-md"
        placeholder="$/years (e.g. 4/3)"
        value={inputOffer}
        onChange={handleInputChange}
      />
      <div className="flex gap-4 font-semibold">
        <Button height="2.25rem" onClick={handleSubmitOffer}>
          Submit
        </Button>
        <div className="my-auto flex">
          <input
            type="checkbox"
            className="w-5 accent-aff-blue"
            checked={finalOfferIsChecked}
            onChange={handleFinalOfferCheck}
          />
          <div className="ml-2">
            Final offer? ({numChecked}/{finalOfferChecks.length})
          </div>
        </div>
      </div>
    </FormControl>
  );
};

export default OfferInput;
