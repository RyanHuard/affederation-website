import React from 'react'
import TeamsHeader from 'src/components/layout/header/components/teams/TeamsHeader'
import Navbar from 'src/components/layout/header/components/navbar/Navbar'
import Ticker from 'src/components/layout/header/components/ticker/Ticker'

const Header = () => {
  return (
    <header className="h-full">
      <TeamsHeader />
      <Ticker />
    </header>
  )
}

export default Header