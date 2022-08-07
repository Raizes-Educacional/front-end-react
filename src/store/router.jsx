import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Login from "../pages/login/index";
import NotFound from "../pages/not-found/index";
import AdminHome from "../pages/AdminHome";
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/admin" element={<AdminHome/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
