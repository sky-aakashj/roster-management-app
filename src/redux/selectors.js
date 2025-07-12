export const getFilteredProviders = (state) => {
  const { providers, filters } = state;

  if (!filters.applied && !filters.pendingChanges) {
    return providers.allProviders; // Return all when no filters applied
  }

  if (filters.applied && !filters.pendingChanges) {
    return providers.filteredProviders; // Return stored filtered results
  }

  // When pending changes but not applied yet, return previous filtered results
  return providers.filteredProviders;
};
