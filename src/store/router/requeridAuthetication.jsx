import { Navigate, Outlet } from "react-router-dom";

import IsAutheticed from "../provider/isAuthetication";

const RequiredAuthetication = () => {
    if (IsAutheticed() === true){
        return <Outlet/>
    }
    return <Navigate to="/login"/>
}
export default RequiredAuthetication;