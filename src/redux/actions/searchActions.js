import {
  SET_SEARCH_TERM,
  SEARCH_PROVIDERS_REQUEST,
  SEARCH_PROVIDERS_SUCCESS,
  SEARCH_PROVIDERS_FAILURE,
  ADD_SELECTED_PROVIDER,
  REMOVE_SELECTED_PROVIDER,
  CLEAR_SELECTED_PROVIDERS,
} from "../actionsTypes";

// Sync actions
export const setSearchTerm = (term) => ({
  type: SET_SEARCH_TERM,
  payload: term,
});

export const addSelectedProvider = (provider) => ({
  type: ADD_SELECTED_PROVIDER,
  payload: provider,
});

export const removeSelectedProvider = (providerId) => ({
  type: REMOVE_SELECTED_PROVIDER,
  payload: providerId,
});

export const clearSelectedProviders = () => ({
  type: CLEAR_SELECTED_PROVIDERS,
});

// Async action for searching
export const searchProviders = (term) => (dispatch, getState) => {
  dispatch({ type: SEARCH_PROVIDERS_REQUEST });

  try {
    // Get providers from Redux state
    const { allProviders } = getState().providers;

    // Simulate API search
    const results = allProviders.filter((provider) =>
      provider.name.toLowerCase().includes(term.toLowerCase())
    );

    //remove objects which ae aleady in selctedProviders
    const selectedProviders = getState().search.selectedProviders;
    const filteredResults = results.filter((result) => {
      return !selectedProviders.some((provider) => provider.id === result.id);
    });

    dispatch({
      type: SEARCH_PROVIDERS_SUCCESS,
      payload: filteredResults,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_PROVIDERS_FAILURE,
      payload: error.message,
    });
  }
};
