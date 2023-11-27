"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  Reducer,
  Dispatch,
} from "react";

import { MyDataState, MyDataAction } from "../types/contextTypes";

type UserContextTypes = {
  state: MyDataState;
  dispatch: Dispatch<MyDataAction>;
};

const userContext = createContext({} as UserContextTypes);

export const useUserContext = () => {
  const context = useContext(userContext);

  if (!context) {
    throw new Error(`Use useUserContext`);
  }

  return context;
};

type UserProviderProps = {
  children: ReactNode;
};

const reducer: Reducer<MyDataState, MyDataAction> = (state, action) => {
  switch (action.type) {
    case "change":
      return { ...state, name: (state.name = "Mark Celoza") };

    case "updateInput":
      return { ...state, inputChange: action.value };

    default:
      return state;
  }
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const initialize = {
    name: "Shella Fresnido",
    switch: false,
    inputChange: "",
  };

  const [state, dispatch] = useReducer(reducer, initialize);

  const contextValue: UserContextTypes = {
    state,
    dispatch,
  };
  return (
    <userContext.Provider value={contextValue}>{children}</userContext.Provider>
  );
};
