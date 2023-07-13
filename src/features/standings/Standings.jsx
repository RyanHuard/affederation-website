import React, { ChangeEvent, useState } from 'react'


import Header from "./components/Header";
import Tables from "./components/Tables";

const Standings = () => {
  const [seasonId, setSeasonId] = useState(6);

  const handleSeasonSelect = e => {
    setSeasonId(parseInt(e.target.value))
  
  }

  return (
    <div className="h-full">
      <Header handleSeasonSelect={handleSeasonSelect}/>
      <Tables seasonId={seasonId} />
    </div>
  )
}

export default Standings