import { useState, useContext, useEffect } from 'react'
//Components
import StepOneForm from './StepOneForm/index';
import StepTwoForm from './StepTwoForm/index'
import StepThreeForm from './StepThreeForm/index';

//Context

export default function RenderStep({step}){
 



  if( step === 0) return <StepOneForm />
    
  else if(step === 1) return <StepTwoForm  />
      
  else if(step === 2) return <StepThreeForm />

}