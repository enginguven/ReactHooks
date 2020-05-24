import React, { useState, useRef } from "react";

const UseReflement = () => {
  const [name, setName] = useState("Mark");
  const refName = useRef(null);
  const ChangeName = () => setName(refName.current.value);
  return (
    <div>
      <h3>UseRef</h3>
      <label>Name:</label>
      <input type="text" ref={refName} onChange={ChangeName}></input>
      <br />
      <br />
      State Val:<b>{name}</b>
    </div>
  );
};
export default UseReflement;
