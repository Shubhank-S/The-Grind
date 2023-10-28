import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SignInSignUpWithLocalStorage from "./SignInSignUpWithLocalStorage/SignInSignUpWithLocalStorage.jsx";
import Parent from "./ChangeParentStateInChild/Parent.jsx";
import PassingValueByRouting from "./PassingValueByRouting/PassingValueByRouting.jsx";
import ReactHelmet from "./React-Helmet/ReactHelmet.jsx";
import CustomPagination from "./CustomPagination/CustomPagination";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <SignInSignUpWithLocalStorage /> */}
    {/* <Parent /> */}
    {/* <PassingValueByRouting /> */}
    {/* <ReactHelmet /> */}
    <CustomPagination />
  </React.StrictMode>
);
