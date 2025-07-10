import { useState } from "react";
import Layout from "../../components/layout/Layout/Layout";

function RosterManagement() {
  const [filters, setFilters] = useState({
    services: [],
    types: [],
    centers: [],
  });
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
      ></Layout>
    </>
  );
}

export default RosterManagement;
