import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Login from "../../pages/login/index";
import NotFound from "../../pages/not-found/index";
import AdminHome from "../../pages/AdminHome";

// Authetication to routes 
import NotAuthetication from "./notAuthetication";
import RequiredAuthetication from "./requeridAuthetication";
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<NotAuthetication />}>
          <Route path="/login" exact element={<Login />} />
        </Route>
        <Route element={<RequiredAuthetication />}>
          <Route exact path="/admin" element={<AdminHome/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
