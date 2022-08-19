import {
  Card,
  CardContent,
  TextField,
  NativeSelect,
  Typography,
} from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { object, mixed, string } from "yup";
//Style-components
import * as S from "./styled";

export default function StepTwoForm() {
  return (
    <S.Container>
      <Card>
        <CardContent>
          <Formik
             validationSchema={object({
              name: mixed().when('FirstName',{
                is: false,
                then: string().required().max(50),
                otherwise: string().required().min(10, "teset")
              })
            })}
            initialValues={{
              FirstName: false,
              age: "",
              Phone: "",
              email: "",
              cep: "",
              city: "",
              District: "",
              Address: "",
              Number: "",
              school: "",
              WhichSeriesDoYouStudy: "",
            }}
            onSubmit={() => {}}
          >
            <Form autoComplete="off">
              <S.ContainerGrandma>
                <S.ContainerParent>
                  <S.ContainerChild>
                    <S.InputForm>
                      <Field
                        name="FirstName"
                        component={TextField}
                        label="Primeiro Nome"
                        placeholder="Digite seu nome completo"
                      ></Field>
                    </S.InputForm>
                    <S.InputForm>
                      <Field
                        name="Age"
                        component={TextField}
                        label="Idade"
                        placeholder="Digite sua idade"
                      ></Field>
                    </S.InputForm>
                  </S.ContainerChild>
                  <S.ContainerChild>
                    <S.InputForm>
                      <Field
                        name="Phone"
                        component={TextField}
                        label="Célular"
                        placeholder="Digite o Número celular"
                      ></Field>
                    </S.InputForm>
                    <S.InputForm>
                      <Field
                        name="email"
                        type="email"
                        component={TextField}
                        label="E-mail"
                        placeholder="Digite o seu e-mail"
                      ></Field>
                    </S.InputForm>
                  </S.ContainerChild>
                </S.ContainerParent>
                <S.ContainerParent>
                  <S.ContainerChild>
                    <S.InputForm>
                      <Field
                        name="cep"
                        component={TextField}
                        label="Cep"
                        placeholder="Digite o seu cep"
                      ></Field>
                    </S.InputForm>
                    <S.InputForm>
                      <Field
                        name="City"
                        component={TextField}
                        label="Cidade"
                        placeholder="Digite sua cidade"
                      ></Field>
                    </S.InputForm>
                    <S.InputForm>
                      <Field
                        name="District"
                        component={TextField}
                        label="Bairro"
                        placeholder="Digite seu bairro"
                      ></Field>
                    </S.InputForm>
                  </S.ContainerChild>
                  <S.InputForm>
                    <Field
                      name="Address"
                      component={TextField}
                      label="Endereço"
                      placeholder="Digite o seu endereço"
                    ></Field>
                  </S.InputForm>
                  <S.InputForm>
                    <Field
                      name="Number"
                      component={TextField}
                      label="Número"
                      placeholder="Digite o número da sua casa"
                    ></Field>
                  </S.InputForm>
                </S.ContainerParent>
                <S.ContainerParent>
                  <S.InputForm>
                    <Field
                      name="school"
                      component={TextField}
                      label="Escola"
                      placeholder="Digite o nome da sua escola"
                    ></Field>
                  </S.InputForm>
                  <S.InputForm>
                    <Field
                      placeholder="Escolha a série que vai cursar em 2022"
                      name="WhichSeriesDoYouStudy"
                      label="Qual ano/série do ENSINO FUNDAMENTAL o aluno cursará em 2022?"
                      component={NativeSelect}
                    >
                      <option disabled selected value="">
                        Escolha a série que vai cursar em 2022
                      </option>
                      <option value="5">5°ano</option>
                      <option value="6">6°ano</option>
                      <option value="7">7°ano</option>
                      <option value="8">8°ano</option>
                      <option value="9">9°ano</option>
                    </Field>
                  </S.InputForm>
                </S.ContainerParent>
                <S.ButtonS type="submit">Next</S.ButtonS>
              </S.ContainerGrandma>
            </Form>
          </Formik>
        </CardContent>
      </Card>
    </S.Container>
  );
}
