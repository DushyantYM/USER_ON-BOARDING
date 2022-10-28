import React from 'react'
import {Box, Stack, Typography} from '@mui/material'

const Heading = () => {
  return (
    <Box sx={{ mt : '80px'}}>

        <Stack spacing={1} direction="row">

          <img src={process.env.PUBLIC_URL + '/Eden-icon.png'} alt="icon" ></img>

          <Typography variant="h6" >Eden</Typography>

        </Stack>

     

    </Box>
  )
}

export default Heading