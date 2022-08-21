import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Global from "./styles/global";

import { AuthProvider } from "./store/provider/AuthContext";
import { StudentProvider } from "./store/provider/FormEmrollment/studentContext";
import { ResposibleProvider } from "./store/provider/FormEmrollment/responsible";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Global />
    <ResposibleProvider>
      <StudentProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </StudentProvider>
    </ResposibleProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
