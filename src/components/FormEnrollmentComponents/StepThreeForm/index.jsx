import { useState, useContext, useEffect } from "react";
import { Form, Row, Col, InputGroup } from "react-bootstrap";
//Maks
import { rgMaks } from "../../Maks/rgMaks";
import { phoneMaks } from "../../Maks/phoneMaks";

//Context
import { FormStepsContext } from "../../../store/provider/ContextFormEnrollment/ContextFormEnrollment";
//Styled-components
import * as S from "./styled";

export default function StepThreeForm({setDice}) {
  const { formStepConfig, setFormStepConfig } = useContext(FormStepsContext);
  const [inputRg, setInputRg] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputFileRg, setInputFileRg] = useState('');
  const [inputNumberPhone, setInputNumberPhone] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputResponsibilityStudentEtec, setInputResponsibilityStudentEtec] =
    useState('');
  const [inputResponsiblePathStudentEtec, setInputResponsiblePathStudentEtec] =
    useState('');
    
  useEffect(()=> {
    setDice(
       {
        name: inputName,
        rgNumber: inputRg,
        fileRg: inputFileRg,
        phoneNumber: inputNumberPhone,
        email: inputEmail,
        responsibilityStudentEtec: inputResponsibilityStudentEtec,
        ResponsiblePathStudentEtec: inputResponsiblePathStudentEtec
      }
    )
    
  }, [inputName, inputRg, inputNumberPhone, inputFileRg, inputNumberPhone, inputEmail,
    inputResponsibilityStudentEtec, inputResponsiblePathStudentEtec])
  return (
    <S.Container>
      <Row className="mb-3">
        {/*========================================================================
                                   responsible name                     
         ===========================================================================*/}
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Nome do responsável</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Digite o nome do responsável"
            onChange={(e) => setInputName(e.target.value)}
            value={inputName}
            maxLength={50}
            minLength={5}
          />
          <Form.Control.Feedback type="invalid">
            Campo obrigatório
          </Form.Control.Feedback>
        </Form.Group>
        {/*===============================================================================
                            RG
        ============================================================================*/}
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Qual o número do seu RG?</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Digite o seu número de rg"
            onChange={(e) => setInputRg(rgMaks(e.target.value))}
            value={inputRg}
            maxLength={12}
            minLength={12}
          />
          <Form.Control.Feedback type="invalid">
            Campo obrigatório
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        {/*===============================================================================
                            FILE  IMAGE RG
        ============================================================================*/}
        <Form.Group as={Col} md="13" controlId="validationCustom03">
          <Form.Label>Anexa uma foto do rg</Form.Label>
          <Form.Control
            required
            type="file"
            onChange={(e) => setInputFileRg(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Campo obrigatório
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        {/*===================================================================================
                                        PHONE NUMBER
    ==================================================================================*/}
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Qual o número do seu célular?</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Digite o número do celular do responsável"
            onChange={(e) => setInputNumberPhone(phoneMaks(e.target.value))}
            value={inputNumberPhone}
            maxLength={14}
            minLength={14}
          />
          <Form.Control.Feedback type="invalid">
            Campo obrigatório
          </Form.Control.Feedback>
        </Form.Group>
        {/*===================================================================================
                                        email
    ==================================================================================*/}
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>E-mail do Aluno</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Digite o email do aluno"
            maxLength={50}
            onChange={(e) => setInputEmail(e.target.value)}
            value={inputEmail}
          />
          <Form.Control.Feedback>Parece bom!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="">
        {/*===================================================================
                                ResponsibilityStudentEtec
        ======================================================================*/}
        <Form.Group as={Col} md="6" controlId="validationCustom06">
          <Form.Label>
            Você tem formas de garantir que o menor sob sua responsabilidade vá
            e volte da ETEC de Perus com segurança?
          </Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => {
              setInputResponsibilityStudentEtec(e.target.value);
            }}
            required
          >
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </Form.Select>
        </Form.Group>
        {}
        <Form.Group as={Col} md="6" controlId="validationCustom07">
          <Form.Label>
            Você se responsabiliza pela segurança do menor sob sua
            responsabilidade no trajeto de ida e vinda ao Raízes??
          </Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => {
              setInputResponsiblePathStudentEtec(e.target.value);
            }}
            required
          >
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} className="mb-3">
          <S.MarginTop>

            <Form.Check
                required
                label="Eu autorizo o uso de minha imagem e do menor sob minha responsabilidade em fotos ou vídeos, sem finalidade comercial, para ser utilizada pelo Raízes. A presente autorização é concedida a título gratuito, abrangendo o uso da imagem acima mencionada em todo território nacional e no exterior, em todas as suas modalidades.
                "
                feedbackType="invalid"
                feedback="Campo obrigatório"
            />
          </S.MarginTop>
        </Form.Group>
      </Row>
    </S.Container>
  );
}
