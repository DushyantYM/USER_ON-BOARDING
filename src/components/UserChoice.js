import React, {useState, useEffect} from 'react'
import {
   Box, Typography, TextField, InputBase,
   InputLabel,Button, Stack, Card, CardContent} from '@mui/material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded'; 
import "./UserChoice.css"

const UserChoice = ({nextStep, userDetails}) => {

  const [isCardActive , setIsCardActive] = useState({
    card1 : false,
    card2 : false
  })

  const handleClick = (num) => {
    // 👇️ toggle
    // console.log("clicked")
    if(num === 1){
      setIsCardActive((prevState) => ({...prevState,
        card1 : !prevState.card1,
        card2 : false
      }))
    }
    else if(num === 2){

      setIsCardActive((prevState) => ({...prevState,
        card2 : !prevState.card2,
        card1 : false
      }))

    }
// 
    // 👇️ or set to true
    // setIsActive(true);
  };

  // useEffect(() => {
     

  // }, [isActiveCard])
  


  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Typography variant="h6" gutterBottom>
         How are you planning to use Eden
        </Typography>

        <Typography variant="caption" display="block">
          We'll streamline your setup experience accordingly
        </Typography>
    
        {/* <FormControl variant="standard"> */}
        <Box>
          <Stack spacing={4}>

            <Box>
              <Stack direction = "row" 
              justifyContent="center"
              alignItems="center"
              spacing ={3}
               mt={2}
                >
                  {/* //card1 */}
              <Box>
              </Box>   
               
               <Box>

              

                <Card
                //  sx={{ minWidth: 100, borderColor: 'black'}}
                  // sx={{ borderColor: 'primary.main' }}
                  style={{
                    border: isCardActive.card1 ? '1px solid #8a52f2' : '',
                    // color: isActive ? 'white' : '',
                  }}
                   
                >
                   <button className='card-btn'

                    onClick ={() => handleClick(1)}
                    
                    >                 

                      <CardContent>
                          <PersonRoundedIcon style={{ color: isCardActive.card1 ? '#8a52f2' : 'black' }}/>

                          <Typography variant="subtitle2" gutterBottom>
                            For myself
                          </Typography>

                          <Typography variant="body2" gutterBottom>
                            Write better. think more clearly. Stay organized
                          </Typography>
                        
                        </CardContent>
                   
                    </button> 
                  </Card>
                

               </Box>

                {/* //card2 */}

               <Box>
            
                  <Card 
                     style={{
                      border: isCardActive.card2 ? '1px solid #8a52f2' : '',
                      // color: isActive ? 'white' : '',
                    }}
                  >

                  <button className="card-btn"

                    onClick ={() => handleClick(2)}

                    >
                   

                    <CardContent>
                        <GroupsRoundedIcon style={{ color: isCardActive.card2 ? '#8a52f2' : 'black' }}/>

                        <Typography variant="subtitle2" gutterBottom>
                        With my team
                        </Typography>

                        <Typography variant="body2" gutterBottom>
                        Write better. think more clearly. Stay organized
                        </Typography>
                      
                      </CardContent>


                    
                      
                    </button>  
                  </Card>
                
               </Box>     


              </Stack>



            </Box>

            

            <Box sx={{margin : '5rem'}}>
              <Button style={{ width : '100%', height : '40px', backgroundColor : '#8a52f2', fontSize : '10px', padding : '0px 30px'}}
               variant="contained" onClick={ nextStep }>Create Workspace</Button>
            </Box>
            
          </Stack>

        </Box>

         
      </Box>
  )
}

export default UserChoice;