import {
  FETCH_PROVIDERS_REQUEST,
  FETCH_PROVIDERS_SUCCESS,
  FETCH_PROVIDERS_FAILURE,
} from "../actionsTypes";
import { mockFetchProviders } from "../../services/mockData/mockApi";

export const fetchProvidersRequest = () => ({
  type: FETCH_PROVIDERS_REQUEST,
});

export const fetchProvidersSuccess = (providers) => ({
  type: FETCH_PROVIDERS_SUCCESS,
  payload: providers,
});

export const fetchProvidersFailure = (error) => ({
  type: FETCH_PROVIDERS_FAILURE,
  payload: error,
});

export const fetchProviders = () => {
  return async (dispatch) => {
    dispatch(fetchProvidersRequest());
    try {
      const providers = await mockFetchProviders();
      dispatch(fetchProvidersSuccess(providers));
    } catch (error) {
      dispatch(fetchProvidersFailure(error.message));
    }
  };
};
