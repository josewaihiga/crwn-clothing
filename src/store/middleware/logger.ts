import { Middleware } from "redux";

import { RootState } from "../store";

// I don't love using any here, though this is a logger (my weak justification)
export const loggerMiddleware: Middleware<{}, RootState> = (store) => (next) => (action: any) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState());

  next(action);

  console.log("nextState: ", store.getState());
};
