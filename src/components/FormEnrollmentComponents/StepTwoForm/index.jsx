import { useContext, useState, useEffect } from "react";
import { Col, Form, Row, InputGroup } from "react-bootstrap";
//Maks
import { phoneMaks } from "../../Maks/phoneMaks";
import { cepMask } from "../../Maks/cepMaks";
import { ageMaks } from "../../Maks/ageMaks";
//Context
import { StudentContext } from "../../../store/provider/FormEmrollment/studentContext";
//Styled component
import * as S from "./styled";
export default function StepTwoForm() {
  const { student, setStudent } = useContext(StudentContext);
  /*=======================================================================
                          HOOKS GET FORM VALUES 
  ========================================================================*/
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputCep, setInputCep] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [inputDistrict, setInputDistrict] = useState("");
  const [inputComplement, setInputComplement] = useState("");
  const [inputShool, setInputShool] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputChooseTheSeries, setInputChooseTheSeries] = useState("");
  const [inputKnowingRaizes, setInputKnowingRaizes] = useState("");
  const [inputRemoteClassroom, setInputRemoteClassroom] = useState("");
  const [inputOpenHoursSaturday, setInputOpenHoursSaturday] = useState("");

  useEffect(() => {
    /*=================================================================
    Let's get the values ​​of the student property of the context if it has a 
    length > 1 and assign it to the hook state of each input

    I'm doing this so I don't pass the value of the input with the context,
    so the user can't delete or typee
    ==================================================================*/
   if(student.name.length > 0) setInputName(student.name);
    
    if(student.email.length > 0 ) setInputEmail(student.email);

    if(student.age.length > 0) setInputAge(student.age);

    if(student.phone.length > 0) setInputPhone(student.phone);

    if(student.cep.length > 0) setInputCep(student.cep);
    
    if(student.address.length > 0) setInputAddress(student.address);

    if(student.city.length > 0) setInputCity(student.city);

    if(student.district.length > 0) setInputDistrict(student.district);

    if(student.complement.length > 0) setInputComplement(student.complement);

    if(student.shool.length > 0) setInputShool(student.shool);

    if(student.chooseTheSeries.length > 0) setInputChooseTheSeries(student.chooseTheSeries);

    if(student.knowingRaizes.length > 0) setInputKnowingRaizes(student.knowingRaizes);
 
    if(student.remoteClassroom.length > 0) setInputRemoteClassroom(student.remoteClassroom);

    if(student.openHoursSaturday.length > 0) setInputOpenHoursSaturday(student.openHoursSaturday);
  }, [])
/*  useEffect(() => {
    /*===================================================================
        Checks if the user changed the field, if it changed, 
        it will set only the field that changed to the context, 
        thus avoiding touching other properties of the student object
    =====================================================================*/
  

    


/*  ]);*/
  useEffect(() => {
    setStudent({ ...student, name: inputName });
  }, [inputName])
  useEffect(() => {
    setStudent({ ...student, age: inputAge })
  }, [inputAge])
  useEffect(() => {
    setStudent({ ...student, phone: inputPhone });
  }, [inputPhone])
  useEffect(() => {
    setStudent({ ...student, cep: inputCep });
  }, [inputCep])
  useEffect(() => {
    setStudent({ ...student, address: inputAddress });
  }, [inputAddress])
  useEffect(() => {
    setStudent({ ...student, city: inputCity });
  }, [inputCity])
  useEffect(() => {
    setStudent({ ...student, district: inputDistrict });
  }, [inputDistrict])
  useEffect(() => {
    setStudent({ ...student, complement: inputComplement });
  }, [inputComplement])
  useEffect(() => {
    setStudent({ ...student, shool: inputShool });
  }, [inputShool])
  useEffect(() => {
    setStudent({ ...student, email: inputEmail });
  }, [inputEmail])
  useEffect(() => {
    setStudent({ ...student, chooseTheSeries: inputChooseTheSeries });
  }, [inputChooseTheSeries])
  useEffect(() => {
    setStudent({ ...student, knowingRaizes: inputKnowingRaizes });
  }, [inputKnowingRaizes])
  useEffect(() => {
    setStudent({ ...student, remoteClassroom: inputRemoteClassroom });
  }, [inputRemoteClassroom])
  useEffect(() => {
    setStudent({ ...student, openHoursSaturday: inputOpenHoursSaturday });
  }, [inputOpenHoursSaturday])
  return (
    <S.Container>
      <Row className="mb-3">
        {/*========================================================
                     NAME
        ===========================================================*/}
        <Form.Group as={Col} md="6" controlId="validationCustom001">
          <Form.Label>Nome do Aluno </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Digite o seu nome completo"
            minLength={10}
            maxLength={50}
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <Form.Control.Feedback>Parece bom!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor, prencha esse campo
          </Form.Control.Feedback>
        </Form.Group>
        {/*==========================================================
                            AGE         
        =============================================================*/}
        <Form.Group as={Col} md="6" controlId="validationCustom002">
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
      </Row>
      <Row className="mb-3">
        {/*================================================================
                            PHONE
         =================================================================*/}
        <Form.Group as={Col} md="6" controlId="validationCustomUsername003">
          <Form.Label>Número do celular do Aluno</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Núemro do celular do aluno"
              aria-describedby="inputGroupPrepend"
              required
              minLength="14"
              maxLength="14"
              value={inputPhone}
              onChange={(e) => setInputPhone(phoneMaks(e.target.value))}
            />
            <Form.Control.Feedback> bom!</Form.Control.Feedback>

            <Form.Control.Feedback type="invalid">
              Por favor, fale-me seu número de celular.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        {/*========================================================================
                                  email
        ============================================================================*/}
        <Form.Group as={Col} md="6" controlId="validationCustom004">
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
          <Form.Control.Feedback type="invalid">
            Por favor, prencha esse campo
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        {/*===============================================================
                                    CEP
        ==================================================================*/}
        <Form.Group as={Col} md="6" controlId="validationCustom005">
          <Form.Label>Cep</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o cep"
            required
            minLength="9"
            maxLength="9"
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
        <Form.Group as={Col} md="6" controlId="validationCustom006">
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
      </Row>
      <Row className="mb-3">
        {/*==================================================================
                                DISTRICT
          ===============================================================*/}
        <Form.Group as={Col} md="6" controlId="validationCustom007">
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
        <Form.Group as={Col} md="6" controlId="validationCustom008">
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
        <Form.Group as={Col} md="6" controlId="validationCustom009">
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
        <Form.Group as={Col} md="6" controlId="validationCustom010">
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
      </Row>
      <Row className="mb-3">
        {/*===================================================================
                          ChooseTheSeries
        =======================================================================*/}
        <Form.Group as={Col} md="6" controlId="validationCustom011">
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
            <option value={inputChooseTheSeries}>{inputChooseTheSeries}</option>
            <option value="5°ano">5°ano</option>
            <option value="6°ano">6°ano</option>
            <option value="7°ano">7°ano</option>
            <option value="8°ano">8°ano</option>
            <option value="9°ano">9°ano</option>
          </Form.Select>
        </Form.Group>
  
        {/*===================================================================
                          InputKnowingRaizes
        =======================================================================*/}
        <Form.Group as={Col} md="6" controlId="validationCustom012">
          <Form.Label>Por onde ficou sabendo do Raízes?</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setInputKnowingRaizes(e.target.value)}
            required
          >
            <option value={inputKnowingRaizes}>{inputKnowingRaizes}</option>
            <option value="Grupo de Whatsapp">Grupo de Whatsapp</option>
            <option value="Divulgação em reunião escolar">
              Divulgação em reunião escolar
            </option>
            <option value="Divulgação pelo instagram">
              Divulgação pelo instagram
            </option>
            <option value="Divulgação pelo facebook">
              Divulgação pelo Facebook
            </option>
            <option value="Indicação de amigo/familires">
              Indicação de amigo/familires
            </option>
            <option value="Outro">Outro</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        {/*===================================================================
                          inputRemoteClassroom
        =======================================================================*/}
        <Form.Group as={Col} md="6" controlId="validationCustom013">
          <Form.Label>
            Se o início das aulas for à distância, o aluno terá condições de
            cursar?
          </Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => {
              setInputRemoteClassroom(e.target.value);
            }}
            required
          >
            <option value={inputRemoteClassroom}>{inputRemoteClassroom}</option>
            <option value="sim">Sim</option>
            <option value="não">Não</option>
          </Form.Select>

        </Form.Group>
        {/*===================================================================
                         Open HoursSaturday
        =======================================================================*/}
        <Form.Group as={Col} md="6" controlId="validationCustom014">
          <Form.Label>
            O aluno terá horário livre aos sábados das 08 horas às 13 horas?
          </Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setInputOpenHoursSaturday(e.target.value)}
            required
          >
            <option value={inputOpenHoursSaturday}> {inputOpenHoursSaturday}</option>
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
