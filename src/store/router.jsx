import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import Login from "../pages/login/index.jsx";
import notFound from "../pages/not-found/index.jsx"
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="*" element={notFound} />
      </Routes>
    </BrowserRouter>
  );
}
