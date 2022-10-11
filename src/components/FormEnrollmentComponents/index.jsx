import React, { useState, useEffect, useContext, useMemo } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Form } from "react-bootstrap";
// componentes
import RenderStep from "./RenderStep";
import ModalComponent from "../modal/index";
// style
import { useStyles } from "./styled";
import * as S from "./styled";
//Img
import Logotipo from "../../assets/logotipo.png";
//CONTEXT
import { ResponsibleContext } from "../../store/provider/FormEmrollment/responsible";
const getSteps = () => ["Início", "Aluno", "Responsável"];

function FormEnrollmentComponents() {
  const classes = useStyles();
  const {responsible, setResponsible} = useContext(ResponsibleContext)
  const [validated, setValidated] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [isButtonTrue, setIsButtonTrue] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const ga = false
  const steps = getSteps();

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setFormIsValid(true);
      handleNext();
    }

    setValidated(true);
  };
  const LogicRenderButton = () => {
    if (activeStep > steps.length - 1) {
      return <ModalComponent />;
    } else {
      return (
        <div>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.button}
          >
            Voltar
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
          >
            {activeStep === steps.length - 1 ? "Cadastrar" : "Continuar"}
          </Button>
        </div>
      );
    }
  };
  
  return (
    <div className={classes.root}>
      <S.Container>
        <img src={Logotipo} alt="logotipo" width={300}></img>
        <h1> Formulário de matrículo do aluno</h1>
      </S.Container>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <RenderStep step={activeStep} FormIsValid={formIsValid} />
          <S.WrapeerCenter>{LogicRenderButton()}</S.WrapeerCenter>
        </Form>
      </div>
    </div>
  );
}
export default FormEnrollmentComponents;
