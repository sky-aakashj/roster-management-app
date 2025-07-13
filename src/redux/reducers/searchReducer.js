import {
  SET_SEARCH_TERM,
  SEARCH_PROVIDERS_REQUEST,
  SEARCH_PROVIDERS_SUCCESS,
  SEARCH_PROVIDERS_FAILURE,
  ADD_SELECTED_PROVIDER,
  REMOVE_SELECTED_PROVIDER,
  CLEAR_SELECTED_PROVIDERS,
  SET_PROVIDER_COLORS,
} from "../actionsTypes";

const initialState = {
  term: "",
  results: [],
  selectedProviders: [],
  providerColors: {},
  loading: false,
  error: null,
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        term: action.payload,
      };

    case SEARCH_PROVIDERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SEARCH_PROVIDERS_SUCCESS:
      return {
        ...state,
        results: action.payload,
        loading: false,
      };

    case SEARCH_PROVIDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_SELECTED_PROVIDER:
      // Add provider if not already selected (max 5)
      if (state.selectedProviders.length >= 5) return state;
      if (state.selectedProviders.some((p) => p.id === action.payload.id))
        return state;

      return {
        ...state,
        selectedProviders: [...state.selectedProviders, action.payload],
        results: [],
      };

    case REMOVE_SELECTED_PROVIDER:
      return {
        ...state,
        selectedProviders: state.selectedProviders.filter(
          (provider) => provider.id !== action.payload
        ),
      };
    case SET_PROVIDER_COLORS:
      return {
        ...state,
        providerColors: action.payload,
      };

    case CLEAR_SELECTED_PROVIDERS:
      return {
        ...state,
        selectedProviders: [],
      };

    default:
      return state;
  }
}
