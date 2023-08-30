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
import { Field, Form, Formik, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

import Header from "./components/Header";
import Button from "../../components/button/Button";
import { fromPairs } from "lodash";
import { validateLastName } from "./components/validateLastName";

const CreateAPlayer = () => {
  // TODO: User should be able to chose height/weight and jersey number.
  // Waiting until we change that throughout the whole league.

  const [position, setPosition] = useState("");
  const [hasPosition, setHasPosition] = useState(false);
  const [formIsFilled, setFormIsFilled] = useState(false);

  const navigate = useNavigate();

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

  const handlePositionSelect = (position) => {
    if (position != "") {
      setHasPosition(true);
      console.log(position)
    } else {
      setHasPosition(false);
    }
  };

  const checkRequiredForms = (values, setFormIsFilled) => {
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        if (values[key] === "") {
          setFormIsFilled(false); // If an empty string is found, set to false
          return; // Return early since we found an empty value
        }
      }
    }
    
    // If no empty strings were found, set to true
    setFormIsFilled(true);
  }
  

  return (
    <MainLayout header={<Header />}>
      <div className="p-3">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            position: "",
            homeState: "",
            hometown: "",
            college: "",
            build: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            navigate("/create-a-player/checkout");
          }}
        >
          {({ handleBlur, handleChange, values }) => (
            
            <Form>
              {/* Checks that the form is filled for enabling of the create player button */}

              {checkRequiredForms(values, setFormIsFilled)}
              <div className="mx-auto flex max-w-3xl flex-col gap-8">
                <div className="flex gap-6">
                  <div className="w-full">
                    <FormControl>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        size="lg"
                        variant=""
                        name="firstName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.firstName}
                      />
                    </FormControl>
                  </div>
                  <div className="w-full">
                    <Field
                      name="lastName"
                      validate={validateLastName} // Use the custom validation function
                    >
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.lastName && form.touched.lastName}>
                          <FormLabel>Last Name</FormLabel>
                          <Input
                            size="lg"
                            variant=""
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.lastName}
                            {...field}
                          />
                          <FormErrorMessage name="lastName" component="div">{form.errors.lastName}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </div>
                </div>
                <div>
                  <FormControl>
                    <FormLabel>Position</FormLabel>
                    <Select
                      size="lg"
                      variant=""
                      name="position"
                      defaultValue=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.position}
                    >
                      {positions.map((pos, index) => (
                        <option value={pos} key={index}>
                          {pos}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <FormControl>
                    <FormLabel>Home State</FormLabel>
                    <Select
                      size="lg"
                      variant=""
                      name="homeState"
                      defaultValue=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.homeState}
                    >
                      {states.map((state, index) => (
                        <option value={state} key={index}>
                          {state}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <FormControl>
                    <FormLabel>Hometown</FormLabel>
                    <Input
                      size="lg"
                      variant=""
                      name="hometown"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.hometown}
                    />
                  </FormControl>
                </div>
                <div>
                  <FormControl>
                    <FormLabel>College</FormLabel>
                    <Select
                      size="lg"
                      variant=""
                      name="college"
                      defaultValue=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.college}
                    >
                      {colleges.map((college, index) => (
                        <option value={college} key={index}>
                          {college}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <FormControl isInvalid={values.position == ""}>
                    <FormLabel>Build</FormLabel>
                    <Select
                      isDisabled={values.position == ""}
                      size="lg"
                      variant=""
                      name="build"
                      defaultValue=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.build}
                    >
                      {colleges.map((college, index) => (
                <option value={college} key={index}>
                  {college}
                </option>
              ))}
                    </Select>
                    <FormErrorMessage>
                      You need to select a position first
                    </FormErrorMessage>
                  </FormControl>
                </div>
                <Button height="50px" type="submit" disabled={!formIsFilled} >
                  CREATE PLAYER
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </MainLayout>
  );
};

export default CreateAPlayer;
