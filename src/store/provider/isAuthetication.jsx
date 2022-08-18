import React from "react";
import { AuthContext } from "./AuthContext";
export default function IsAutheticed() {
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
    if(user === undefined){
        setUser({
            no: ''
        })
    }
    
}