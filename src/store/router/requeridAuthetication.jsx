import { Navigate, Outlet } from "react-router-dom";

import IsAutheticed from "../provider/isAuthetication";

const RequiredAuthetication = () => {
    console.log(IsAutheticed())
    return <Outlet/>
}
export default RequiredAuthetication;