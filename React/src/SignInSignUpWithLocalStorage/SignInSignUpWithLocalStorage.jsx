import { useState, useEffect, useRef } from "react";
import Home from "./Home";
import "./SignInSignUpWithLocalStorage.css";

function SignInSignUpWithLocalStorage() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const localSignUp = localStorage.getItem("signup");
  const localName = localStorage.getItem("name");
  const [showHome, setShowHome] = useState(false);
  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
  });

  const handleClick = () => {
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signup", email.current.value);
      alert("Login Successfully");
    }
    console.log(name, email, password);
  };

  return (
    <>
      {showHome ? (
        <Home name={localName} />
      ) : (
        <>
          <input type="text" ref={name} placeholder="Enter name..." />
          <input type="text" ref={email} placeholder="Enter email..." />
          <input
            type="password"
            ref={password}
            placeholder="Enter password..."
          />
          <button onClick={handleClick}>Submit</button>
        </>
      )}
    </>
  );
}

export default SignInSignUpWithLocalStorage;
