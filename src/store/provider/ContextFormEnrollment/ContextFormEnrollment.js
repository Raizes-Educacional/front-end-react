import { createContext, useState } from "react";

export const FormStepsContext = createContext({
  responsible: {
    ResponsiblePathStudentEtec: '',
    email: '',
    fileRg: '',
    name: '',
    phoneNumber: '',
    responsibilityStudentEtec: '',
    rgNumber: ''
  },
  student: {
    name: '',
    age: '',
    phone: '',
    cep: '',
    address: '',
    city: '',
    district: '',
    complement: '',
    shool: '',
    email: '',
    chooseTheSeries: '',
    knowingRaizes: '',
    remoteClassroom: '',
    openHoursSaturday:  '',
  },
});

export const ProviderFormSteps = (props) => {
  const [formStepConfig, setFormStepConfig] = useState({
  responsible: {
    ResponsiblePathStudentEtec: '',
    email: '',
    fileRg: '',
    name: '',
    phoneNumber: '',
    responsibilityStudentEtec: '',
    rgNumber: ''
  },
  student: {
    name: '',
    age: '',
    phone: '',
    cep: '',
    address: '',
    city: '',
    district: '',
    complement: '',
    shool: '',
    email: '',
    chooseTheSeries: '',
    knowingRaizes: '',
    remoteClassroom: '',
    openHoursSaturday:  '',
  },
});
  return (
    <FormStepsContext.Provider value={{formStepConfig, setFormStepConfig}}>
      {props.children}
    </FormStepsContext.Provider>
  );
};
