import React, { useEffect, useState } from 'react'
import "./Steps.css"

const Steps = ({currentStep,numOfSteps}) => {

     const [stepState, setStepState] = useState({
         1 : true,
         2 : false,
         3 : false,
         4 : false
     })
     
     

    const stepsIconsArray = [1 , 2 , 3 , 4];

    const stepsList = stepsIconsArray.map((val, idx) => {

      // console.log(stepState);
// 
        
         return ( 
         <li key={idx}>
            <div className="step"
            style = {{
              background : stepState[val] ? "#8a52f2" : "white",
              color: stepState[val] ? "white" : "black",
              border : stepState[val] ? "none" : "0.01px solid rgb(236, 232, 232)"

            }}

            
            >{val}</div>
          </li>
          )

    })

    useEffect(() => {
      setStepState((prevState ) => ({
        ...prevState,
        [currentStep] : true
       }))

       
    },[currentStep])


    return (

     

       
        <div>
          {/* {console.log(stepState)} */}
           
{/*  */}
          

          <ul>
              {stepsList}
          </ul>




        </div>
  )
}

export default Steps