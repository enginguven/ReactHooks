import React, { useState } from "react";

const UseStateElement = () => {
  const [name, setName] = useState("Mark");
  return (
    <div>
      <label>Name:</label>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <br />
      <br />
      State Val:<b>{name}</b>
    </div>
  );
};
export default UseStateElement;
