import { useState, useContext, useMemo } from "react";
//Components
import StepOneForm from "./StepOneForm/index";
import StepTwoForm from "./StepTwoForm/index";
import StepThreeForm from "./StepThreeForm/index";
//Context
import { ResponsibleContext } from "../../store/provider/FormEmrollment/responsible";
import { StudentContext } from "../../store/provider/FormEmrollment/studentContext";
//Service
import { FormEnrollmentService } from "../../services/FormEnrollment/formEnrollment.service";
export default function RenderStep({ step }) {
  const ga = false
  const { student, setStudent } = useContext(StudentContext);
  const { responsible, setResponsible } = useContext(ResponsibleContext);

  useMemo(async () => {
      const date = new Date(student.age).toISOString();
      const base64 = responsible.fileRg.replace(/^data:image\/\w+;base64,/, "");
      const type = "image/" + responsible.fileRg.split(";")[0].split("/")[1];
      let id_student = null;
      await FormEnrollmentService.postStudent(
        student.name,
        date,
        new Boolean(student.anySpecialNeeds),
        student.whatSpecialNeed,
        student.phone,
        student.email,
        student.address,
        student.houseNumber,
        new String(student.cep),
        student.complement,
        student.district,
        student.city,
        student.shool,
        student.chooseTheSeries,
        student.knowingRaizes,
        new Boolean(student.remoteClassroom),
        new Boolean(setResponsible.openHoursSaturday)
      )
        .then((res) => {
          id_student = res.data.id;
        })
        .catch((e) => console.log(e));
      //================================================
      //              REQUEST RESPONSIBLE
      //================================================
      console.log("id:" + id_student);
      await FormEnrollmentService.postResponsible(
        responsible.name,
        responsible.rgNumber,
        base64,
        type,
        responsible.phoneNumber,
        new String(responsible.email),
        new Boolean(responsible.ResponsiblePathStudentEtec),
        id_student
      )
        .then((res) => console.log(res))
        .catch((erro) => console.log(erro));
    }, [ga]);
  
  if (step === 0) return <StepOneForm />;
  else if (step === 1) return <StepTwoForm />;
  else if (step === 2) return <StepThreeForm />;
  else {

    ga = true
    return <></>
   
  }
}
