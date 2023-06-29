import React from 'react'
import TeamsHeader from './teams/TeamsHeader'
import Navbar from './navbar/Navbar'
import Ticker from './ticker/Ticker'

const Header = () => {
  return (
    <header>
      <TeamsHeader />
      <Ticker />
      <Navbar />
    </header>
  )
}

export default Header