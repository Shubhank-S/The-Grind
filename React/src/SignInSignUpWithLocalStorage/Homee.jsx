import React from "react";

function Homee({ name }) {
  const logout = () => {
    localStorage.removeItem("signup");
    alert("Logout SuccesFully");
  };
  const deleteUser = () => {
    localStorage.clear();
    alert("User Deleted");
  };
  return (
    <>
      <h1>Welcome {name}</h1>
      <button onClick={logout}>Logout</button>
      <button onClick={deleteUser}>Delete</button>
    </>
  );
}

export default Homee;
