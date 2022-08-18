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
