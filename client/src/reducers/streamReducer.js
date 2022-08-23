import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      const { [action.payload]: removedStream, ...newState } = state;
      return newState;
    case FETCH_STREAMS:
      return action.payload.reduce(
        (obj, el) => {
          return { ...obj, [el.id]: el };
        },
        { ...state }
      );
    default:
      return state;
  }
};
