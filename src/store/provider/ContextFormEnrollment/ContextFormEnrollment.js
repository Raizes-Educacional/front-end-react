import { createContext, useState } from "react";

export const FormStepsContext = createContext({ un: 844});

export const ProviderFormSteps = (props) => {
  const [formStepConfig, setFormStepConfig] = useState();
  return (
    <FormStepsContext.Provider value={{formStepConfig, setFormStepConfig}}>
      {props.children}
    </FormStepsContext.Provider>
  );
};
