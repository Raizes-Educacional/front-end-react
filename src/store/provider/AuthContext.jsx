import React,{ useState }from "react";


export const AuthContext = React.createContext({})

export const AuthProvider = (props) => {
    const [user, setUser] = useState();
    return (
        <AuthContext.Provider value={{user, setUser}}>
            {// Ele apresenta os filhos do meu componentes
            }
            {props.children}
        </AuthContext.Provider>
    );
}
export const IsAutheticed = () => {
    const {user, setUser} = React.useContext(AuthContext);
    // it is necessary to set the localstore token empty, for the next condition it works
    if(localStorage.getItem('token') == null){
        localStorage.setItem('token', '');
    }
    // ====================================================== ========================================
    // CHECK IF IT HAS A TOKEN PROPERTY WITHIN THE USER CONTEXT
    // ALSO CHECK IF YOU HAVE A TOKEN ON THE LOCALSTORE
    // IF ANY OF THIS CONDITION IS TRUE, IT RETURNS TRUE, THAT IS, SUCCESSFULLY AUTHENTICATED USER
    // IF NOT RETURN false
    // ====================================================================================================
    if(user.hasOwnProperty('token') || localStorage.getItem('token').length > 1){
        return true;
    }else{
        return false;
    }
}