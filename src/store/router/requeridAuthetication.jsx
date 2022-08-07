import { Navigate, Outlet } from "react-router-dom";

import { IsAutheticed } from "../provider/AuthContext";

const RequiredAuthetication = () => {
    if (IsAutheticed() === true){
        return <Outlet/>
    }
    return <Navigate to="/login"></Navigate>
}
export default RequiredAuthetication;