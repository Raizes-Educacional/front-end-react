import { useState, useContext } from 'react'
//Components
import StepOneForm from './StepOneForm/index';
import StepTwoForm from './StepTwoForm/index'
import StepThreeForm from './StepThreeForm/index';

//Context
import { FormStepsContext } from '../../store/provider/ContextFormEnrollment/ContextFormEnrollment';

export default function RenderStep({step}){
  const {formStepConfig, setFormStepConfig} = useContext(FormStepsContext)
  const [test, setTest] = useState();
  if( step === 0) return <StepOneForm />
    
  else if(step === 1) return <StepTwoForm/>
      
  else if(step === 2) return <StepThreeForm/>

}