import React, { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import {
  Input,
  FormLabel,
  FormControl,
  Select,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import Header from "./components/Header";

const CreateAPlayer = () => {
  // TODO: User should be able to chose height/weight and jersey number.
  // Waiting until we change that throughout the whole league.

  const [position, setPosition] = useState("");
  const [hasPosition, setHasPosition] = useState(false);

  const positions = [
    "",
    "QB",
    "HB",
    "FB",
    "TE",
    "WR",
    "LT",
    "LG",
    "C",
    "RT",
    "RG",
    "RDE",
    "RDT",
    "LDT",
    "LDE",
    "ILB",
    "OLB",
    "CB",
    "FS",
    "SS",
    "K",
    "P",
  ];

  const states = [
    "",
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const colleges = [
    "",
    "Alabama",
    "Arkansas",
    "Auburn",
    "Florida",
    "Georgia",
    "Kentucky",
    "LSU",
    "Mississippi",
    "Miss State",
    "Mizzou",
    "South Carolina",
    "Tennessee",
    "Texas A&M",
    "Vanderbilt",
    "Illinois",
    "Indiana",
    "Iowa",
    "Maryland",
    "Michigan",
    "Michigan State",
    "Minnesota",
    "Nebraska",
    "Northwestern",
    "Ohio State",
    "Penn State",
    "Purdue",
    "Rutgers",
    "Wisconsin",
    "Baylor",
    "Iowa State",
    "Kansas",
    "Kansas State",
    "Oklahoma",
    "Oklahoma State",
    "TCU",
    "Texas",
    "Texas Tech",
    "West Virginia",
    "Boston College",
    "Clemson",
    "Duke",
    "Florida State",
    "Georgia Tech",
    "Louisville",
    "Miami",
    "North Carolina",
    "NC State",
    "Notre Dame",
    "Pittsburgh",
    "Syracuse",
    "Virginia",
    "Virginia Tech",
    "Wake Forest",
    "Arizona",
    "Arizona State",
    "Cal",
    "Colorado",
    "Oregon",
    "Oregon State",
    "Stanford",
    "Utah",
    "Washington",
    "Wash State",
    "UCLA",
    "USC",
  ];

  const handlePositionSelect = (e) => {
    let position = e.target.value;
    if (position != "") {
      setPosition(position);
      setHasPosition(true);
    } else {
      setHasPosition(false);
    }
  };

  return (
    <MainLayout header={<Header />}>
      <div className="">
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          <div className="flex gap-6">
            <div className="w-full">
              <FormLabel>First Name</FormLabel>
              <Input size="lg" variant="" />
            </div>
            <div className="w-full">
              <FormLabel>Last Name</FormLabel>
              <Input size="lg" variant="" />
            </div>
          </div>
          <div>
            <FormLabel>Position</FormLabel>
            <Select
              size="lg"
              variant=""
              defaultValue=""
              onChange={handlePositionSelect}
            >
              {positions.map((pos, index) => (
                <option value={pos} key={index}>
                  {pos}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <FormLabel>Home State</FormLabel>
            <Select size="lg" variant="" defaultValue="">
              {states.map((state, index) => (
                <option value={state} key={index}>
                  {state}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <FormLabel>Hometown</FormLabel>
            <Input size="lg" variant="" />
          </div>
          <div>
              <FormLabel>College</FormLabel>
              <Select
                size="lg"
                variant=""
                defaultValue=""
              >
                {colleges.map((college, index) => (
                  <option value={college} key={index}>
                    {college}
                  </option>
                ))}
              </Select>
          </div>
          <div>
            <FormControl isInvalid={!hasPosition}>
              <FormLabel>Build</FormLabel>
              <Select
                isDisabled={!hasPosition}
                size="lg"
                variant=""
                defaultValue=""
              >
                {/* {colleges.map((college, index) => (
                  <option value={college} key={index}>
                    {college}
                  </option>
                ))} */}
              </Select>
              <FormErrorMessage>
                You need to select a position first
              </FormErrorMessage>
            </FormControl>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CreateAPlayer;
