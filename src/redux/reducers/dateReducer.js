import { SET_SELECTED_DATE } from "../actionsTypes";

const initialState = {
  selectedDate: new Date(), // Default to current date
};

export default function dateReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.payload,
      };
    default:
      return state;
  }
}
