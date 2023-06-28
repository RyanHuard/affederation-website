import React from 'react'
import welcomeBanner from "../../assets/welcome-banner.png";

const Home = () => {
  return (
    <div>
      <header className="h-[400px]">
        <img src={welcomeBanner} className="object-cover"/>
      </header>
    </div>
  )
}

export default Home