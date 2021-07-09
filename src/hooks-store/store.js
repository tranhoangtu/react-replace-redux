import { useEffect, useState } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
  const setstate = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };
    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setstate);
    }
    console.log(listeners.length);
    return () => {
      if (shouldListen) {
        listeners = listeners.filter((li) => li != setstate);
      }
    };
  }, [shouldListen, setstate]);

  return [globalState, dispatch];
};

export const initStore = (userAction, initalState) => {
  if (initalState) {
    globalState = { ...globalState, ...initalState };
  }
  actions = { ...actions, ...userAction };
};
