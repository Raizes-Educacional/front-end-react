import React,{ useState }from "react";


export const AuthContext = React.createContext({
    userToken: null
})

export const AuthProvider = (props) => {
    const [user, setUser] = useState({
        userToken: null
    });
    return (
        <AuthContext.Provider value={{user, setUser}}>
            {// Ele apresenta os filhos do meu componentes
            }
            {props.children}
        </AuthContext.Provider>
    );
}
