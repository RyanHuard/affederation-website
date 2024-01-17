import React, { useContext, useEffect, useState } from "react";

import { io } from "socket.io-client";
import WheelComponent from "react-wheel-of-prizes";

import { TeamContext } from "/src/lib/TeamContext.js";
import { useFreeAgents } from "./api/getFreeAgents";
import Button from "../../components/button/Button";

import MainLayout from "src/components/layout/MainLayout";
import List from "./components/List";
import Offers from "./components/Offers";
import CurrentPlayer from "./components/CurrentPlayer";
import OfferInput from "./components/OfferInput";
import TeamList from "./components/TeamList";

let socket;
const FreeAgency = () => {
  const [start, setStart] = useState(false);
  const [capRemaining, setCapRemaining] = useState([])

  const [inputOffer, setInputOffer] = useState("");
  const [offers, setOffers] = useState([]);
  const [userOffer, setUserOffer] = useState();

  const [finalOfferIsChecked, setFinalOfferIsChecked] = useState(false);
  const [finalOfferChecks, setFinalOfferChecks] = useState([]);
  const [numChecked, setNumChecked] = useState(0);

  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  
  let freeAgentsQuery = useFreeAgents();
  let freeAgents = freeAgentsQuery?.data;
  let currentPlayer = freeAgents?.[currentPlayerIndex]
  
  const teams = useContext(TeamContext)?.data;

  const calculateEntries = (offer) => {
    const progression = [3, 2.5, 2, 1.5, 1];
    const prime = [2, 2.5, 3, 2.5, 2];
    const regression = [1, 1.5, 2, 2.5, 3];

    let salary = offer.split("/")[0];
    let length = offer.split("/")[1];
    let entries;

    if (currentPlayer.age <= 27) {
      entries = salary * progression[length - 1] * 2;
    } else if (currentPlayer.age <= 32) {
      entries = salary * prime[length - 1] * 2;
    } else {
      entries = salary * regression[length - 1] * 2;
    }

    return entries;
  };

  useEffect(() => {
    socket = io({ transports: ["websocket"] });

    socket.on("start", (data) => {
      setStart(data);
    });

    socket.on("connect", () => {
      const teamId = localStorage.getItem("teamId");
      socket.emit("final_offer_checked", {
        is_checked: finalOfferIsChecked,
        team_id: teamId,
      });
    });

    socket.on("update_cap", (updated_cap) => {
      setCapRemaining(updated_cap[localStorage.getItem("teamId")]);
    })

    socket.on("update_offers", (updated_offers) => {
      setOffers([...updated_offers]);
    });

    socket.on("final_offer_checks", (final_offers) => {
      setFinalOfferChecks(final_offers);
      let finalOfferCount = final_offers.filter(
        (offer) => offer.data?.isChecked == true
      ).length;

      if (finalOfferCount >= 1) {
        setNumChecked(finalOfferCount);
      } else {
        setNumChecked(0);
      }
    });

    socket.on("winner", (winner) => {
      setFinalOfferIsChecked(false);
      setOffers([]);
      setInputOffer("");
      setNumChecked(0);
      setUserOffer();
    });

    socket.on("update_player", (data) => {
      setCurrentPlayerIndex(data);
      setCurrentPlayer(freeAgents?.[data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendOffer = () => {
    const userTeam = teams?.find(
      (team) => team.team_id == localStorage.getItem("teamId")
    );

    const offer = {
      contract: inputOffer,
      entries: calculateEntries(inputOffer),
      team: userTeam,
    };   
    socket.emit("send_offer", offer);

  };

  const handleSubmitOffer = () => {
    if (/^\d+\/[1-5]$/.test(inputOffer)) {
      sendOffer();
      setUserOffer(inputOffer);
      setInputOffer("");
    } else {
      alert(
        "Please enter your offer in the correct format ($/years):\ne.g. '4/3' offers the player $4,000,000 for 3 years"
      );
      setInputOffer("");
    }
  };

  const handleFinalOfferCheck = (e) => {
    const isChecked = e.target.checked;
    const teamId = localStorage.getItem("teamId");

    setFinalOfferIsChecked(isChecked);
    socket.emit("final_offer_checked", {
      is_checked: isChecked,
      team_id: teamId,
    });
  };
  

  return (
    <div className="bg-[#edeef2]">
      <div className="border-b-2 border-white bg-aff-blue pb-8 pt-8">
        <h1 className="text-center text-2xl font-bold text-gray-100">
          AMERICAN FOOTBALL FEDERATION FREE AGENCY 2028
        </h1>
      </div>
      {start || localStorage.getItem("teamId") == "2" ? (
        <div className="flex h-[89.3vh] justify-center gap-8 p-8 ">
          <List
            freeAgents={freeAgents}
            teams={teams}
            currentPlayerIndex={currentPlayerIndex}
          />
          <Offers offers={offers} teams={teams} />
          <div className="flex flex-col gap-8">
            <CurrentPlayer currentPlayer={freeAgents?.[currentPlayerIndex]} capRemaining={capRemaining} userOffer={userOffer} setCapRemaining={setCapRemaining}/>
            <OfferInput
              currentPlayer={currentPlayer}
              handleSubmitOffer={handleSubmitOffer}
              inputOffer={inputOffer}
              setInputOffer={setInputOffer}
              finalOfferIsChecked={finalOfferIsChecked}
              handleFinalOfferCheck={handleFinalOfferCheck}
              finalOfferChecks={finalOfferChecks}
              numChecked={numChecked}
            />
            {localStorage.getItem("teamId") == 2 && !start && (
              <Button onClick={() => socket.emit("start")}>Start</Button>
            )}
           <TeamList finalOfferChecks={finalOfferChecks} teams={teams}/>
          </div>
        </div>
      ) : (
        <div className="flex h-[89.3vh] justify-center gap-8 p-8 ">
          <h1 className="text-center text-xl font-semibold">
            Waiting for free agency to start!
          </h1>
        </div>
      )}
    </div>
  );
};

export default FreeAgency;
