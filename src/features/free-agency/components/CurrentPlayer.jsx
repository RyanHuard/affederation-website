import React from 'react'

const CurrentPlayer = ({ currentPlayer, userOffer }) => {
  return (
    <div className="h-fit min-h-[50%] w-[30rem] bg-white drop-shadow-md">
          <div className="px-6 pt-6">
            <h2 className="text-xl font-semibold">
              {currentPlayer?.name} is now accepting offers:
            </h2>
            <div className="pt-6">
              <div className="flex gap-4">
                <img
                  width="170"
                  src={`assets/players/season_6/${
                    currentPlayer?.name.split(" ")[0]
                  }_${currentPlayer?.name.split(" ")[1]}.png`}
                />
                <div className="flex gap-2">
                  <ul className="font-semibold [&>*]:pb-2">
                    <li>Name:</li>
                    <li>Position: </li>
                    <li>College:</li>
                    <li>Age:</li>
                    <li>Personality:</li>
                  </ul>
                  <ul className="[&>*]:pb-2">
                    <li>{currentPlayer?.name}</li>
                    <li>{currentPlayer?.pos}</li>
                    <li>{currentPlayer?.college}</li>
                    <li>{currentPlayer?.age}</li>
                    <li>{currentPlayer?.personality}</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-8 py-6">
                <div className="flex gap-2">
                  <ul className="font-semibold [&>*]:pb-2 ">
                    <li className="font-bold">Overall:</li>
                    <li>Skill: </li>
                    <li>Speed:</li>
                    <li>Agility:</li>
                    <li>Strength:</li>
                  </ul>
                  <ul className="[&>*]:pb-2">
                    <li className="font-bold">{currentPlayer?.overall}</li>
                    <li>{currentPlayer?.skill}</li>
                    <li>{currentPlayer?.speed}</li>
                    <li>{currentPlayer?.agility}</li>
                    <li>{currentPlayer?.strength}</li>
                  </ul>
                </div>
                <div className="ml-16">
                  <span className="font-bold">Your current offer:</span>
                  <div className="pt-2">$4,000,000 / 3 years</div>
                </div>
              </div>
            </div>
          </div>
        </div>

  )
}

export default CurrentPlayer