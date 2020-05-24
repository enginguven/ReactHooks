import React, { useCallback, useState } from "react";

const UseCallBacklement = () => {
  const [count, setCount] = useState(1);

  //this will memoize the event. this will increment one time.only set=2
  const handleClickWithCallBack = useCallback(() => {
    setCount(count + 1);
  }, []);
  const handleClickWithoutCallBack = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <input value={`${count}`}></input> <br />
      <button onClick={handleClickWithCallBack}>With CallBack</button>
      <br />
      <button onClick={handleClickWithoutCallBack}>Without CallBack</button>
    </div>
  );
};

export default UseCallBacklement;
