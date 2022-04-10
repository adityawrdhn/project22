import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  isOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};
export const DrawerContext = createContext({
  state: { isOpen: false },
  toggle: () => {},
});

export const DrawerProvider = ({ children }) => {
  const [{ isOpen }, dispatch] = useReducer(reducer, initialState);
  const toggle = () => dispatch({ type: "TOGGLE" });
  return (
    <DrawerContext.Provider value={{ isOpen, toggle }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  return context;
};

export default DrawerProvider;
