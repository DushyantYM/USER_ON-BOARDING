import React from 'react'
import { Box, Typography, TextField, InputBase, InputLabel,Button, Stack} from '@mui/material';
// import { alpha, styled } from '@mui/material/styles';
import "./WelcomeFormPage.css"


const WelcomeFormPage = ({nextStep, userDetails, handleChange}) => {


  return (
    <>

     <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Typography variant="h6" gutterBottom>
          Welocome! First Things first...
        </Typography>

        <Typography variant="caption" display="block">
          You can always change them later
        </Typography>

        {/* <FormControl variant="standard"> */}
        <Box sx= {{margin : '25px'}}>
          <Stack spacing={2}>

            <Box>
              <InputLabel>
                Full Name 
              </InputLabel>

              <TextField 
                sx={{
                  // width: { sm: 200, md: 300 },
                  "& .MuiInputBase-root": {
                      height: 50
                  }
                  
                }}
                inputProps={{style: {fontSize: 15}}} // font size of input text
                
                id="outlined-basic" 
                variant="outlined"
                name="fullName"
                value={userDetails.fullName}
                placeholder = "Steve Jobs" 
                onChange={handleChange}
              />
              
              
            </Box>

            
            <Box>

              <InputLabel>
                Display Name 
              </InputLabel>
              <TextField 
                sx={{
                  "& .MuiInputBase-root": {
                      height: 50,
                      
                  }
                }}
                inputProps={{style: {fontSize: 15}}} // font size of input text
                id="outlined-basic" 
                variant="outlined" 
                name="displayName"
                value={userDetails.displayName}
                placeholder = "Steve" 
                onChange={handleChange}
              />


            </Box>

            <Box sx={{margin : '5rem'}}>
              <Button style={{ width : '100%', height : '40px', backgroundColor : '#8a52f2', fontSize : '10px'}}
               variant="contained" onClick={ nextStep }>Create Workspace</Button>
            </Box>
            
          </Stack>

        </Box>

         
      </Box>
        
       

    </>
  )
  
}

export default WelcomeFormPage;