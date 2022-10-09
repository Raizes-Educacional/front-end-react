import React from "react";
import { AuthContext } from "./AuthContext";
export default function IsAutheticed() {
    const {user, setUser} = React.useContext(AuthContext);
    // it is necessary to set the localstore token empty, for the next condition it works
    if(localStorage.getItem('acess-token') == null || user === undefined){
        localStorage.setItem('acess-token', '');
        setUser({
            no: ''
        })
        return false
    }
    else {
        return true
    }

    
}