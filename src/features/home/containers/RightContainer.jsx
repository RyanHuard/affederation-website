import React from 'react'
import { Box } from '@chakra-ui/react'

import CreateAPlayer from '../cards/CreateAPlayer'

const RightContainer = () => {
  return (
    <Box className="w-1/3 xl:w-[26.5rem]">
        <CreateAPlayer />
    </Box>
  )
}

export default RightContainer