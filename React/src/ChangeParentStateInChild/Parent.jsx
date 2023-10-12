import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <>
      <button onClick={() => setShow(true)}>Show Model</button>
      {show ? <Child show={setShow} /> : <h1>No Model</h1>}
    </>
  );
}

export default Parent;
