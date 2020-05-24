import React, { useReducer } from "react";

const initData = {
  count: 0,
};

const actions = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

const incrementReducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return { ...initData, count: state.count + 1 };
    case actions.DECREMENT:
      return { ...initData, count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducerElement = () => {
  const [state, dispatch] = useReducer(incrementReducer, initData);
  return (
    <div>
      <button onClick={() => dispatch({ type: actions.INCREMENT })}>+</button>
      {state.count}
      <button onClick={() => dispatch({ type: actions.DECREMENT })}>-</button>
    </div>
  );
};

export default UseReducerElement;
