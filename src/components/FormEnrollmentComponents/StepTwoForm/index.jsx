import { useContext, useState } from "react";
import { Col, Form, Row, InputGroup } from "react-bootstrap";
//Maks
import { phoneMaks } from "../../Maks/phoneMaks";
import { cepMask } from "../../Maks/cepMaks";
import { ageMaks } from "../../Maks/ageMaks";
//Context
import { FormStepsContext } from "../../../store/provider/ContextFormEnrollment/ContextFormEnrollment";
//Styled component
import * as S from "./styled";
export default function StepTwoForm({ step }) {
  const { formStepConfig, setFormStepConfig } = useContext(FormStepsContext);
  const [inputName, setInputName] = useState();
  const [inputAge, setInputAge] = useState();
  const [inputPhone, setInputPhone] = useState();
  const [inputCep, setInputCep] = useState();
  const [inputAddress, setInputAddress] = useState();
  const [inputCity, setInputCity] = useState();
  const [inputDistrict, setInputDistrict] = useState();
  const [inputComplement, setInputComplement] = useState();
  const [inputShool, setInputShool] = useState();
  const [inputChooseTheSeries, setInputChooseTheSeries] = useState();
  const [inputKnowingRaizes, setInputKnowingRaizes] = useState();
  const [inputRemoteClassroom, setInputRemoteClassroom] = useState();
  const [inputOpenHoursSaturday, setInputOpenHoursSaturday] = useState();
  return (
    <S.Container>
      <Row className="mb-3">
        {/*========================================================
                     NAME
        ===========================================================*/}
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nome completo</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Digite o seu nome completo"
            id="name"
            minLength={10}
            maxLength={50}
            onChange={(e) => setInputName(e.target.value)}
            value={inputName}
          />
          <Form.Control.Feedback>Parece bom!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor, prencha esse campo
          </Form.Control.Feedback>
        </Form.Group>
        {/*==========================================================
                            AGE         
        =============================================================*/}
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Idade</Form.Label>
          <Form.Control
            required
            type="string"
            placeholder="Coloque sua idade"
            maxLength={2}
            minLength={2}
            value={inputAge}
            onChange={(e) => setInputAge(ageMaks(e.target.value))}
          />
          <Form.Control.Feedback>Parece bom!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor, Coloque sua idade
          </Form.Control.Feedback>
        </Form.Group>
        {/*================================================================
                            PHONE
         =================================================================*/}
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Celular</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Prencha com seu número de celular"
              aria-describedby="inputGroupPrepend"
              required
              minLength="14"
              maxLength="14"
              id="phone"
              value={inputPhone}
              onChange={(e) => setInputPhone(phoneMaks(e.target.value))}
            />
            <Form.Control.Feedback> bom!</Form.Control.Feedback>

            <Form.Control.Feedback type="invalid">
              Por favor, fale-me seu número de celular.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        {/*===============================================================
                                    CEP
        ==================================================================*/}
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Label>Cep</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o cep"
            required
            minLength="9"
            maxLength="9"
            id="cep"
            value={inputCep}
            onChange={(e) => {
              setInputCep(cepMask(e.target.value));
            }}
          />
          <Form.Control.Feedback> boa!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Prencha o seu cep.
          </Form.Control.Feedback>
        </Form.Group>
        {/*===============================================================
                                    ADDRESS
        ==================================================================*/}
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Endereço</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu endereço"
            required
            minLength={5}
            maxLength={70}
            value={inputAddress}
            onChange={(e) => setInputAddress(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Por favor, coloque seu endereço.
          </Form.Control.Feedback>
          <Form.Control.Feedback> Parece bom!</Form.Control.Feedback>
        </Form.Group>
        {/*==================================================================
                                DISTRICT
          ===============================================================*/}
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Bairro</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu bairro"
            required
            minLength={5}
            maxLength={70}
            value={inputDistrict}
            onChange={(e) => setInputDistrict(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Por favor, coloque seu endereço.
          </Form.Control.Feedback>
          <Form.Control.Feedback> Parece bom!</Form.Control.Feedback>
        </Form.Group>
        {/*===============================================================
                                    CITY
        ==================================================================*/}
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Cidade</Form.Label>
          <Form.Control
            type="text"
            placeholder="Escreva sua cidade"
            required
            maxLength={20}
            minLength={3}
            onChange={(e) => setInputCity(e.target.value)}
            value={inputCity}
          />
          <Form.Control.Feedback type="invalid">
            Por favor, prencha essa campo
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        {/*===================================================================
                          COMPLEMENT
      =======================================================================*/}
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Complemento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o seu complemento"
            required
            maxLength={20}
            onChange={(e) => setInputComplement(e.target.value)}
            value={inputComplement}
          />
          <Form.Control.Feedback type="invalid">
            Por favor, prencha essa campo
          </Form.Control.Feedback>
        </Form.Group>
        {/*===================================================================
                          SCHOLL
      =======================================================================*/}
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Escola</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite sua escola"
            required
            minLength={10}
            maxLength={50}
            onChange={(e) => setInputShool(e.target.value)}
            value={inputShool}
          />
          <Form.Control.Feedback type="invalid">
            Por favor, prencha esse campo
          </Form.Control.Feedback>
        </Form.Group>
        {/*===================================================================
                          ChooseTheSeries
        =======================================================================*/}
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>
            Qual ano/série do ENSINO FUNDAMENTAL o aluno cursará em 2022?
          </Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => {
              setInputChooseTheSeries(e.target.value);
            }}
            required
          >
            <option disabled selected value>
              Selecione a série
            </option>
            <option value="5">5°ano</option>
            <option value="6">6°ano</option>
            <option value="7">7°ano</option>
            <option value="8">8°ano</option>
            <option value="9">9°ano</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
         {/*===================================================================
                          InputKnowingRaizes
        =======================================================================*/}
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>Por onde ficou sabendo do Raízes?</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setInputKnowingRaizes(e.target.value)}
            required
          >
            <option disabled selected value>
              Selecione uma opção
            </option>
            <option value="Grupo de Whatsapp<">Grupo de Whatsapp</option>
            <option value="Divulgação em reunião escolar">Divulgação em reunião escolar</option>
            <option value="Divulgação pelo instagram">Divulgação pelo instagram</option>
            <option value="Divulgação pelo facebook">Divulgação pelo Facebook</option>
            <option value="Indicação de amigo/familires">Indicação de amigo/familires</option>
            <option value="Outro">Outro</option>
          </Form.Select>
        </Form.Group>
         {/*===================================================================
                          inputRemoteClassroom
        =======================================================================*/}
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>Se o início das aulas for à distância, o aluno terá condições de cursar?</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setInputRemoteClassroom(e.target.value)}
            required
          >
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
   
          </Form.Select>

          <Form.Control.Feedback type="invalid">
            Selecione a série
          </Form.Control.Feedback>
        </Form.Group>
        {/*===================================================================
                         Open HoursSaturday
        =======================================================================*/}
        <Form.Group as={Col} md="13" controlId="validationCustom05">
          <Form.Label>O aluno terá horário livre aos sábados das 08 horas às 13 horas?</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setInputOpenHoursSaturday(e.target.value)}
            required
          >
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
   
          </Form.Select>

          <Form.Control.Feedback type="invalid">
            Selecione a série
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
    </S.Container>
  );
}
