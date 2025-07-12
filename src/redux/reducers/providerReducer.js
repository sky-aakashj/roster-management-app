import {
  FETCH_PROVIDERS_REQUEST,
  FETCH_PROVIDERS_SUCCESS,
  FETCH_PROVIDERS_FAILURE,
  APPLY_FILTERS_SUCCESS,
} from "../actionsTypes";

const initialState = {
  allProviders: [], // Original list from API
  filteredProviders: [], // Filtered results
  loading: false,
  error: null,
};

export default function providerReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROVIDERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_PROVIDERS_SUCCESS:
      return {
        ...state,
        allProviders: action.payload,
        filteredProviders: action.payload,
        loading: false,
      };

    case FETCH_PROVIDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case APPLY_FILTERS_SUCCESS:
      return {
        ...state,
        filteredProviders: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
