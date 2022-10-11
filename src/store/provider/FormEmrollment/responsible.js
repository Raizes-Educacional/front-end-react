import React,{ useState }from "react";


export const ResponsibleContext = React.createContext({
    name: '',
    rgNumber: '',
    fileRg: '',
    phoneNumber: '',
    email: '',
    responsibilityStudentEtec: '',
    ResponsiblePathStudentEtec: '',
    confirmRequest: false
})


export const ResposibleProvider = (props) => {
    const [responsible, setResponsible] = useState({
        name: '',
        rgNumber: '',
        fileRg: '',
        phoneNumber: '',
        email: '',
        responsibilityStudentEtec: '',
        ResponsiblePathStudentEtec: '',
        confirmRequest: false

    });
    return (
        <ResponsibleContext.Provider value={{responsible, setResponsible}}>
            {// Ele apresenta os filhos do meu componentes
            }
            {props.children}
        </ResponsibleContext.Provider>
    );
}
