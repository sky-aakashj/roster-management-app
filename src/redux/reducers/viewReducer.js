import { SET_CURRENT_VIEW } from "../actionsTypes";

const initialState = {
  currentView: "list", // Default to list view
};

export default function viewReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_VIEW:
      return {
        ...state,
        currentView: action.payload,
      };
    default:
      return state;
  }
}
