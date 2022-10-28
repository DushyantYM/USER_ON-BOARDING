import React from 'react'
import {
    Box, Typography, TextField, InputBase,
    InputLabel,Button, Stack, Card, CardContent} from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import './FinishPage.css'

const FinishPage = ({name}) => {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>

        <div className='rounded-div'>

         <img src={process.env.PUBLIC_URL + '/rounded-icon.png'} alt="icon" ></img>

        </div>

        
        <Typography variant="h6" gutterBottom>
          Congratulations, Eden!
        </Typography>

        <Typography variant="caption" display="block">
          Your have completed onboarding, You can start using Eden!
        </Typography>

        {/* <FormControl variant="standard"> */}
        
            <Box sx={{margin : '5rem'}}>
              <Button style={{ width : '100%', height : '40px', backgroundColor : '#8a52f2', fontSize : '10px', padding : '0px 30px'}}
               variant="contained" >Launch Eden
              </Button>
            </Box>

         
      </Box>
  )
}

export default FinishPage