import { useState, useContext } from 'react'

//Context
import { FormStepsContext } from '../../store/provider/ContextFormEnrollment/ContextFormEnrollment';
//Style-components
import StepThreeForm from './StepThreeForm/index';

export default function RenderStep({step}){
  const {formStepConfig, setFormStepConfig} = useContext(FormStepsContext)
  const [test, setTest] = useState();

  if( step === 0){
    setFormStepConfig({usename: "gabriel"})

    return (
      <input type="text" onChange={(e) =>  setTest(e.target.value)} value={test} required/>
    );
  }else if(step === 1){
    alert(formStepConfig.usename)
    return(
      <h1>02 context: { }</h1>
      
    )
  }else if(step === 2){
    return(
      <StepThreeForm/>
    )
  }
}