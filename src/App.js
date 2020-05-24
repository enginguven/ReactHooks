import React from "react";
import UseStateElement from "./HookUseState";
import UseEffectlement from "./HookUseEffect";
import UseReflement from "./HookUseRef";
import UseReducerElement from "./HookUseReducer";
import HookUseContext from "./HookUseContext";
import UseCallBacklement from "./HookUseCallBack";
import UseCustomHookElement from "./CustomHooksWithAxiosAndCancelButton";
import moviesData from "./Data/MoviesData";
export const MovieContext = React.createContext();

const App = () => {
  return (
    <div>
      {/* <UseStateElement /> */}
      {/* <UseEffectlement /> */}
      {/* <UseReflement /> */}
      {/* <MovieContext.Provider value={moviesData}>
        <HookUseContext />
      </MovieContext.Provider> */}
      {/* <UseReducerElement /> */}
      {/* <UseCustomHookElement /> */}
      <UseCallBacklement />
    </div>
  );
};

export default App;
