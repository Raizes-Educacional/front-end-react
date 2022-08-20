import { useState, useContext, useEffect } from 'react'
//Components
import StepOneForm from './StepOneForm/index';
import StepTwoForm from './StepTwoForm/index'
import StepThreeForm from './StepThreeForm/index';

//Context
import { FormStepsContext } from '../../store/provider/ContextFormEnrollment/ContextFormEnrollment';

export default function RenderStep({step}){
  const {formStepConfig, setFormStepConfig} = useContext(FormStepsContext)
  const [allDiceFom, setAllDiceFom] = useState();
  const [diceFormTwo, setDiceFormTwo] = useState();
  const [diceFormThree, setDiceFormThree] = useState();

  useEffect(() => {
    setAllDiceFom({
      student: diceFormTwo,
      responsible: diceFormThree
    })
    console.log(allDiceFom)
  }, [diceFormTwo, diceFormThree])


  if( step === 0) return <StepOneForm />
    
  else if(step === 1) return <StepTwoForm setDice={setDiceFormTwo}  />
      
  else if(step === 2) return <StepThreeForm setDice={setDiceFormThree}/>

}