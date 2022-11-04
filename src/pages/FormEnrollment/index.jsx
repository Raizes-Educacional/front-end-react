import React, { useState } from 'react';
//Components
import { makeStyles, Stepper, Step, StepLabel, Button, Typography, Card, CardContent, } from '@material-ui/core';
import { Col, Form, InputGroup, Row, Container } from 'react-bootstrap'
import ButtonBs from '../../components/button';
import { Formik } from 'formik';
import * as yup from 'yup'
//Images
import Logotipo from '../../assets/logotipo.png'

//Styled Component
import * as S from './styled';

const schema = yup.object().shape({
    nameStudent: yup.string()
        .max(60, 'O maximo e 60 caracteres')
        .min(10, 'Mínimo e 10 caracteres')
        .required('Por favor, prencha esse campo'),
    birthDate: yup.date().required('Campo obrigatório'),
    specialneedsStudent: yup.bool().required('Campo obritório')
});
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));
function getSteps() {
    return ['Início', 'Aluno', 'Responsável'];
}
function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return stepOne();
        case 1:
            return 'What is an ad group anyways?';
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Unknown stepIndex';
    }
}
function stepOne() {
    return (
        <S.WrapperStepOne>
            <p>
                O <strong>RAÍZES</strong> é um espaço educativo que tem por objetivo
                envolver estudantes do ensino fundamental em uma experiência que promova
                a fruição do conhecimento e a compreensão do mundo em toda a sua
                complexidade. Temos três modalidades:
            </p>
            <S.MarginElements>
                <Card>
                    <CardContent>
                        <h1> Turmas do 9° ano</h1>
                        <p>Destinada ao preparo para processos seletivos de escolas de referência, como ETECs, SENAI, etc;
                        </p>
                    </CardContent>
                </Card>
            </S.MarginElements>
            <S.MarginElements>
                <Card>
                    <CardContent>
                        <h1> Turmas do 5° ano e 6° ano</h1>
                        <p>Destinadas a desenvolver atividades em formas de projetos, desenvolvendo habilidades gerais como: investigação, raciocínio lógico, criatividade, senso crítico, coordenação motora e a comunicação.
                        </p>
                    </CardContent>
                </Card>
            </S.MarginElements>
            <p>As aulas acontecem aos <strong>SÁBADOS</strong> das <strong>8:00 horas</strong> às <strong>13:00</strong> horas na <strong>ETEC DE PERUS.</strong></p>
        </S.WrapperStepOne>
    )
}

function FormEnrollment() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <S.Wrapper>
            <S.WrapperChild>
                <S.ContainerLogotipoTitle>
                    <S.LogotipoRaizesImagem src={Logotipo} alt="RAIZES"></S.LogotipoRaizesImagem>
                    <S.Title>Formulário de matricula</S.Title>
                </S.ContainerLogotipoTitle>
                <div className={classes.root}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <div>
                        {activeStep === steps.length ? (
                            <div>
                                <Typography className={classes.instructions}>All steps completed</Typography>
                                <Button onClick={handleReset}>Reset</Button>
                            </div>
                        ) : (
                            <S.ContainerButtons>
                                <Typography className={classes.instructions}>
                                    <Formik
                                        validationSchema={schema}
                                        onSubmit={console.log}
                                        initialValues={{
                                            nameStudent: '',
                                            lastName: '',
                                            username: '',
                                            city: '',
                                            state: '',
                                            zip: '',
                                            terms: false,
                                        }}
                                    >
                                        {({
                                            handleSubmit,
                                            handleChange,
                                            handleBlur,
                                            values,
                                            touched,
                                            isValid,
                                            errors,
                                        }) => (
                                        <S.Father>

                                            <Form noValidate onSubmit={handleSubmit}>
                                                {activeStep === 0 && (
                                                    <S.WrapperStepOne>
                                                        <p>
                                                            O <strong>RAÍZES</strong> é um espaço educativo que tem por objetivo
                                                            envolver estudantes do ensino fundamental em uma experiência que promova
                                                            a fruição do conhecimento e a compreensão do mundo em toda a sua
                                                            complexidade. Temos três modalidades:
                                                        </p>
                                                        <S.MarginElements>
                                                            <Card>
                                                                <CardContent>
                                                                    <h1> Turmas do 9° ano</h1>
                                                                    <p>Destinada ao preparo para processos seletivos de escolas de referência, como ETECs, SENAI, etc;
                                                                    </p>
                                                                </CardContent>
                                                            </Card>
                                                        </S.MarginElements>
                                                        <S.MarginElements>
                                                            <Card>
                                                                <CardContent>
                                                                    <h1> Turmas do 5° ano e 6° ano</h1>
                                                                    <p>Destinadas a desenvolver atividades em formas de projetos, desenvolvendo habilidades gerais como: investigação, raciocínio lógico, criatividade, senso crítico, coordenação motora e a comunicação.
                                                                    </p>
                                                                </CardContent>
                                                            </Card>
                                                        </S.MarginElements>
                                                        <p>As aulas acontecem aos <strong>SÁBADOS</strong> das <strong>8:00 horas</strong> às <strong>13:00</strong> horas na <strong>ETEC DE PERUS.</strong></p>
                                                    </S.WrapperStepOne>
                                                )

                                                }
                                                {activeStep === 1 && (
                                                    <S.ContainerForm>
                                                        <Form.Group controlId="exampleForm.ControlInput1">
                                                            <Form.Label>Email address</Form.Label>
                                                            <Form.Control type="email" placeholder="name@example.com" />
                                                        </Form.Group>
                                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                                            <Form.Label>Example textarea</Form.Label>
                                                            <Form.Control as="textarea" rows={3} />
                                                        </Form.Group>
                                                    </S.ContainerForm>

                                                )}

                                            </Form>
                                        </S.Father>
                                        )}
                                    </Formik>

                                </Typography>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.backButton}
                                    >
                                        Back
                                    </Button>
                                    <Button variant="contained" color="primary" onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </S.ContainerButtons>
                        )}
                    </div>
                </div>
            </S.WrapperChild>
        </S.Wrapper>
    );

}
export default FormEnrollment;