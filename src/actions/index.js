import { createAction } from "redux-actions";

export * from "./user";

export const REQUEST_FAILURE = "REQUEST_FAILURE";
export const requestFailure = createAction(REQUEST_FAILURE);
