import {
  SET_SERVICE_FILTER,
  SET_TYPE_FILTER,
  SET_CENTER_FILTER,
  APPLY_FILTERS,
  CLEAR_FILTERS,
  SET_APPLIED_FILTERS,
} from "../actionsTypes";

const initialState = {
  service: "allServices",
  type: "allTypes",
  center: "allCenters",
  applied: false,
  pendingChanges: false,
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SERVICE_FILTER:
      return {
        ...state,
        service: action.payload,
        applied: false,
        pendingChanges: true,
      };

    case SET_TYPE_FILTER:
      return {
        ...state,
        type: action.payload,
        applied: false,
        pendingChanges: true,
      };

    case SET_CENTER_FILTER:
      return {
        ...state,
        center: action.payload,
        applied: false,
        pendingChanges: true,
      };

    case APPLY_FILTERS:
      return {
        ...state,
        applied: true,
        pendingChanges: false,
      };

    case CLEAR_FILTERS:
      return {
        service: "allServices",
        type: "allTypes",
        center: "allCenters",
        applied: false,
        pendingChanges: false,
      };

    case SET_APPLIED_FILTERS:
      return {
        ...state,
        applied: action.payload,
      };

    default:
      return state;
  }
}
