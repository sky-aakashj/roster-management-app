import {
  FETCH_PROVIDERS_REQUEST,
  FETCH_PROVIDERS_SUCCESS,
  FETCH_PROVIDERS_FAILURE,
} from "../actionsTypes";

const initialState = {
  providers: [],
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
        providers: action.payload,
        loading: false,
      };

    case FETCH_PROVIDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
