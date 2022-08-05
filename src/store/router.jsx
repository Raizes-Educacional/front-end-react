import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/login/index.jsx";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
