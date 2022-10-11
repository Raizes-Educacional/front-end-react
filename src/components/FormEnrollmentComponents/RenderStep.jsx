import { useState, useContext, useEffect } from 'react'
//Components
import StepOneForm from './StepOneForm/index';
import StepTwoForm from './StepTwoForm/index'
import StepThreeForm from './StepThreeForm/index';

//Context
import { ResponsibleContext } from '../../store/provider/FormEmrollment/responsible';
import { StudentContext } from '../../store/provider/FormEmrollment/studentContext';
//Service
import { FormEnrollmentService } from '../../services/FormEnrollment/formEnrollment.service';
export default function RenderStep({step}){
  const {student, setStudent} = useContext(StudentContext)
  const {responsible, setResponsible} = useContext(ResponsibleContext)
  const [useStudentHttpApi, setuseStudentHttpApi] = useState();
  const [useResponsibleHttpAPi, setuseResponsibleHttpAPi] = useState();
  const [idstudent, setIdStudent] = useState();
  
  
  useEffect(()=> {
   
    function date(){
      return new Date(student.age).toISOString()
      ;
    
    }
    FormEnrollmentService.postStudent(
      student.name,
      useStudentHttpApi? new Date(student.age).toISOString() : '',
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
    ).then((res) =>{
      setIdStudent(res.data.id);
    } )
    .catch((e) => console.log(e))
  }, [useStudentHttpApi])
  useEffect(() => {
    const base64 = responsible.fileRg.replace(/^data:image\/\w+;base64,/, "")
    const type = 'image/'+responsible.fileRg.split(';')[0].split('/')[1]
    FormEnrollmentService.postResponsible(
      responsible.name,
      responsible.rgNumber,
      base64,
      type,
      responsible.phoneNumber,
      new String(responsible.email),
      new Boolean(responsible.ResponsiblePathStudentEtec),
      idstudent
    ).then(res => console.log(res)) 
    .catch(erro => console.log(erro))
  }, [useResponsibleHttpAPi])
  if( step === 0) return <StepOneForm />
    
  else if(step === 1) return <StepTwoForm  />
      
  else if(step === 2) return <StepThreeForm />

  else {
    function Form(){

      useStudentHttpApi(true);
      useResponsibleHttpAPi(true)
      return (<></>)
    }
    <Form/>
    return (
      <div>        
        <h1> Usuario cadastado</h1>
      </div>
    );
  }
}