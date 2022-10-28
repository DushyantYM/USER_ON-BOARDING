import React , { useState } from 'react'
import WelcomeFormPage from './WelcomeFormPage'
import WorkspaceSetupForm from './WorkspaceSetupForm'
import UserChoice from './UserChoice'
import FinishPage from './FinishPage'
import ProgressBar from './ProgressBar'
import {Stack, Box} from "@mui/material"
import Steps from './Steps'
import Heading from './Heading'

const numberOfSteps = 4;

const Container = () => {

  const [ step, setStep ] = useState(1);
  
  const [userDetails, setUserDetails] = useState({
    fullName : "",
    displayName : "",
    workSpaceName : ""
  });


  const nextStep = () => {

    setStep((step) => step + 1)

  }

  const previousStep = () => {

    setStep( (step) => step -1)
  }

  const handleChange = (e) => {
    const name = e.target.name;
    setUserDetails( prevState => ({
      ...prevState,
      [name] : e.target.value
    }))
  }

  return (

    <>

    {/* {console.log(stepComponent)} */}
    
    <div>

      <Stack justifyContent="center" alignItems = "center">

        <Heading />

        <Box sx ={{}}>

            <ProgressBar numOfSteps= {numberOfSteps} step = {step}/>
            <Steps currentStep={ step} numOfSteps = {numberOfSteps}/>

        </Box>

           

          {
            (() => { 

              switch(step) {

                case 1 : 

                  return (<WelcomeFormPage 
                       handleChange = {handleChange}
                       userDetails = {userDetails}
                       nextStep={nextStep}
                       />)

                case 2 :
                  return (<WorkspaceSetupForm 
                        handleChange = {handleChange}
                        userDetails = {userDetails} 
                        nextStep={nextStep}
                       />)

                case 3 : 
                  return (<UserChoice nextStep={nextStep}/>)
                
                case 4 :
                  
                  return (<FinishPage  />)

                default :  

              }
            })()

          }



      </Stack>

      

    </div>

    </>
  )
}

export default Container