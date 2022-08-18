import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Login from "../../pages/login/index";
import NotFound from "../../pages/NotFound/index";
import AdminHome from "../../pages/AdminHome/index";
import FomrEnrrolment from '../../pages/FormEnrollment/index';
// Authetication to routes 
import NotAuthetication from "./notAuthetication";
import RequiredAuthetication from "./requeridAuthetication";
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NotAuthetication />}>
          <Route path="/login" exact element={<Login />} />
          <Route path="/teste" exact element={<FomrEnrrolment/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<RequiredAuthetication />}>
          <Route exact path="/admin" element={<AdminHome/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
