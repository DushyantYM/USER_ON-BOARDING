import React from 'react'
import { Box, Typography, TextField, Grid,InputBase, InputLabel,Button, Stack} from '@mui/material';
// import { alpha, styled } from '@mui/material/styles';
import "./WorkspaceSetupForm.css"

const bgColor = {
    style : { fill : "#808080" }
}

const WorkspaceSetupForm = ({nextStep, userDetails, handleChange}) => {
  
    

  return (
    <>

    <Box sx={{ width: '100%', maxWidth: 500 }}>
       <Typography variant="h6" gutterBottom>
         Let's setup a home for all your work
       </Typography>

       <Typography variant="caption" display="block">
         You can always create another workspace later.
       </Typography>

       {/* <FormControl variant="standard"> */}

       <Box sx= {{margin : '25px'}}>
          <Stack spacing={2}>

            <Box>
              <InputLabel>
                Workspace Name 
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
              name="workSpaceName"
              value={userDetails.workSpaceName}
              placeholder = "Eden" 
              onChange={handleChange}
              />
              
              
            </Box>

            
            <Box>

              <InputLabel>
                Workspace URL <span style={{ fontSize : '10px'}}>(optional)</span>
              </InputLabel>

              <Box sx={{display : "flex"}}>

               

                  <TextField 
                    sx={{
                      width : '135px !important',
                      "& .MuiInputBase-root": {
                          height: 50,   
                      }
                    }}
                    inputProps={{style: {fontSize: 12}, display : "inline-block"}} // font size of input text
                    id="outlined-basic" 
                    variant="outlined" 
                    name="workspaceURL"
                    value={userDetails.displayName}
                    placeholder = "www.eden.com/" 
                    disabled style={{ backgroundColor: "#D0D0D0" }}
                    />

              

                

                  <TextField 
                    sx={{
                     
                      "& .MuiInputBase-root": {
                          height: 50,
                          
                      }
                    }}
                    inputProps={{style: {fontSize: 15}}} // font size of input text
                    id="outlined-basic" 
                    variant="outlined" 
                    name="workspaceURL"
                    value={userDetails.displayName}
                    placeholder = "Example" 
                    
                    />


              

                 

                 


              </Box>

              


            </Box>

            <Box sx={{margin : '5rem'}}>
              <Button style={{ width : '100%', height : '40px', backgroundColor : '#8a52f2', fontSize : '10px'}}
               variant="contained" onClick={ nextStep }>Create Workspace</Button>
            </Box>
            
          </Stack>

        </Box>
       {/* <Box>
         <Stack spacing={1}>

           <Box>
             <InputLabel>
               Workspace Name
             </InputLabel>
             <TextField id="outlined-basic" variant="outlined" />
             
           </Box>

           
           <Box>

             <InputLabel>
               Workspace URL <span>(optional)</span>
             </InputLabel>
             <TextField id="outlined-basic" variant="outlined"  disabled style={{ backgroundColor: "black" }}/>


           </Box>

           <Box>
             <Button variant="contained" onClick = {nextStep}>Create Workspace</Button>
           </Box>
           
         </Stack>

       </Box> */}

        
     </Box>
       
      

   </>
  )
}

export default WorkspaceSetupForm