import {
  SET_SERVICE_FILTER,
  SET_TYPE_FILTER,
  SET_CENTER_FILTER,
  APPLY_FILTERS,
  CLEAR_FILTERS,
  APPLY_FILTERS_SUCCESS,
} from "../actionsTypes";

export const setServiceFilter = (service) => ({
  type: SET_SERVICE_FILTER,
  payload: service,
});

export const setTypeFilter = (type) => ({
  type: SET_TYPE_FILTER,
  payload: type,
});

export const setCenterFilter = (center) => ({
  type: SET_CENTER_FILTER,
  payload: center,
});

export const applyFilters = () => {
  return (dispatch, getState) => {
    const { providers, filters } = getState();

    // Calculate filtered providers
    const filteredProviders = providers.allProviders.filter((provider) => {
      if (
        filters.service !== "allServices" &&
        provider.provider_usertype !== filters.service
      ) {
        return false;
      }

      if (filters.type !== "allTypes") {
        const providerType = provider.is_inhouse ? "inhouse" : "external";
        if (providerType !== filters.type) {
          return false;
        }
      }

      if (
        filters.center !== "allCenters" &&
        provider.clinic_details.id !== filters.center
      ) {
        return false;
      }

      return true;
    });

    dispatch({ type: APPLY_FILTERS });
    dispatch(applyFiltersSuccess(filteredProviders));
  };
};

export const clearFilters = () => ({
  type: CLEAR_FILTERS,
});
export const applyFiltersSuccess = (filteredProviders) => ({
  type: APPLY_FILTERS_SUCCESS,
  payload: filteredProviders,
});
