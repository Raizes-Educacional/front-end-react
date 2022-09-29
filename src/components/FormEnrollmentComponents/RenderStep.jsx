import { useState, useContext, useEffect } from 'react'
//Components
import StepOneForm from './StepOneForm/index';
import StepTwoForm from './StepTwoForm/index'
import StepThreeForm from './StepThreeForm/index';

//Context
import { ResponsibleContext } from '../../store/provider/FormEmrollment/responsible';
import { StudentContext } from '../../store/provider/FormEmrollment/studentContext';
export default function RenderStep({step}){
  const {student, setStudent} = useContext(StudentContext)
  const {responsible, setResponsible} = useContext(ResponsibleContext)



  if( step === 0) return <StepOneForm />
    
  else if(step === 1) return <StepTwoForm  />
      
  else if(step === 2) return <StepThreeForm />

  else {
    console.log(student, responsible)
    return (
    <div>        
      <h1> Usuario cadastado</h1>
    </div>
    );
  }
}