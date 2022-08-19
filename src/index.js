import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { AuthProvider } from "./store/provider/AuthContext";
import { ProviderFormSteps } from "./store/provider/ContextFormEnrollment/ContextFormEnrollment";
import Global from "./styles/global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Global/>
    <ProviderFormSteps>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ProviderFormSteps>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
