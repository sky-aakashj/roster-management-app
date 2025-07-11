import { useState } from "react";
import Layout from "../../components/layout/Layout/Layout";

function RosterManagement() {
  const [filters, setFilters] = useState({
    services: [],
    types: [],
    centers: [],
  });
  const [selectedSearchProviders, setSelectedSearchProviders] = useState([]);

  const providers = [
    { id: 1, name: "Provider A" },
    { id: 2, name: "Provider B" },
    { id: 3, name: "Provider C" },
    { id: 4, name: "Provider D" },
    { id: 5, name: "Provider E" },
    { id: 6, name: "Provider F" },
  ];
  const handleViewChange = (view) => {
    console.log(`View changed to: ${view}`);
  };
  // Filter change handlers
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };
  const handleApplyFilters = () => {
    // todo:  dispatch an action to fetch filtered providers
    console.log("Filters applied:", filters);
  };
  const handleClearFilters = () => {
    setFilters({
      services: [],
      types: [],
      centers: [],
    });
    console.log("Filters cleared");
  };

  // Searchpanel handlers
  const handleSelectProvider = (provider) => {
    if (selectedSearchProviders.length < 5) {
      setSelectedSearchProviders((prev) => [...prev, provider]);
    }
  };

  const handleRemoveProvider = (providerId) => {
    setSelectedSearchProviders((prev) =>
      prev.filter((provider) => provider.id !== providerId)
    );
  };

  return (
    <>
      <Layout
        showFilters={true}
        onViewChange={handleViewChange}
        currentView={"list"}
        filters={filters}
        onFilterChange={handleFilterChange}
        onApplyFilters={handleApplyFilters}
        onClearFilters={handleClearFilters}
        providers={providers}
        selectedProviders={selectedSearchProviders}
        onSelectProvider={handleSelectProvider}
        onRemoveProvider={handleRemoveProvider}
      ></Layout>
    </>
  );
}

export default RosterManagement;
