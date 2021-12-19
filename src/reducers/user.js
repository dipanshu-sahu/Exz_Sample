import { SET_USER } from "../actions";

const initialState = { user: "" };

export default function user(state = initialState, { payload, type }) {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
}
