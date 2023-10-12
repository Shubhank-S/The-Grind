import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SignInSignUpWithLocalStorage from "./SignInSignUpWithLocalStorage/SignInSignUpWithLocalStorage.jsx";
import Parent from "./ChangeParentStateInChild/Parent.jsx";
import PassingValueByRouting from "./PassingValueByRouting/PassingValueByRouting.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <SignInSignUpWithLocalStorage /> */}
    {/* <Parent /> */}
    <PassingValueByRouting />
  </React.StrictMode>
);
