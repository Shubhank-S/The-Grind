import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const data = [
    {
      name: "Shubhank",
      age: 24,
    },
    {
      name: "Shubhank",
      age: 24,
    },
  ];
  const handleClick = () => {
    navigate("/about", { state: data });
  };
  return (
    <>
      <div>Home</div>
      <button onClick={handleClick}>Go to about</button>
    </>
  );
}

export default Home;
