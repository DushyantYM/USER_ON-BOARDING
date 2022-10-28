import React from 'react'
import "./progressBar.css"



const ProgressBar = ({numOfSteps, step}) => {


  //Method return progress with in pixels
  const calculateBarWidth = () => {

    let divWidth;
    if(step === 1){
      divWidth = 40;
    }
    else if(step === numOfSteps){
      divWidth = 270;
    }
    else{
      divWidth = Number((step/numOfSteps )*290);
    }


    return divWidth;
  }

 

  // if(step ===)
  // const divWidth =  40;
  //  = 
  // console.log(divWidth);
  return (
    <div>

        <div className="progress-bar" style = {{width : calculateBarWidth()+`px`,
          transition : "width 0.8s"
      
      }}>


        </div>
      

    </div>
  )
}

export default ProgressBar