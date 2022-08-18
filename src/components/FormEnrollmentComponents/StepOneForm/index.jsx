import { Card, CardContent, Typography } from "@material-ui/core";

//Styeld Compoent
import * as S from "./styled";
function StepOneForm() {
  return (
    <S.Wrapper>
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
    </S.Wrapper>
  );
}
export default StepOneForm;
