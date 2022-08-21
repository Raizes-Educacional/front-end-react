import React,{ useState }from "react";


export const StudentContext = React.createContext({ student: {

    name: ' ',
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
    openHoursSaturday: ''
}})


export const StudentProvider = (props) => {
    const [student, setStudent] = useState({

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
        openHoursSaturday: ''
    });
    return (
        <StudentContext.Provider value={{student, setStudent}}>
            {// Ele apresenta os filhos do meu componentes
            }
            {props.children}
        </StudentContext.Provider>
    );
}
