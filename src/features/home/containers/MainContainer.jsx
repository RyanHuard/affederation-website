import React from 'react'
import { Box } from '@chakra-ui/react'

import JoinCommunity from '../cards/JoinCommunity'


const MainContainer = () => {
  return (
    <Box className="w-2/3 lg:w-[50rem]">
        <JoinCommunity />
    </Box>
  )
}

export default MainContainer