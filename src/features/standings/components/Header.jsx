import React from 'react'
import { Select } from '@chakra-ui/react'

const Header = () => {
  return (
    <div>
    <header className="text-3xl font-bold">
      STANDINGS
    </header>
    <div className="flex gap-12 py-6">
      <Select borderRadius="sm" width="10rem">
        <option value="2022">2022</option>
      </Select>
      <Select borderRadius="sm" width="10rem">
        <option value="all">All Divisons</option>
      </Select>
    </div>
    <div className="h-[2px] w-full bg-aff-blue"></div>
  </div>
  )
}

export default Header