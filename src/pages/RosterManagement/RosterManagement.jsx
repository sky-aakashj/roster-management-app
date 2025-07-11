import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentView } from "../../redux/actions/viewActions";
import { fetchProviders } from "../../redux/actions/providerActions";
import Layout from "../../components/layout/Layout/Layout";

function RosterManagement() {
  const [filters, setFilters] = useState({
    services: [],
    types: [],
    centers: [],
  });
  const dispatch = useDispatch();

  const [selectedSearchProviders, setSelectedSearchProviders] = useState([]);

  const currentView = useSelector((state) => state.view.currentView);
  const { providers, loading, error } = useSelector((state) => state.providers);

  useEffect(() => {
    dispatch(fetchProviders());
  }, [dispatch]);
  const handleViewToggle = (view) => {
    dispatch(setCurrentView(view));
  };

  // const providers = [
  //   { id: 1, name: "Provider A" },
  //   { id: 2, name: "Provider B" },
  //   { id: 3, name: "Provider C" },
  //   { id: 4, name: "Provider D" },
  //   { id: 5, name: "Provider E" },
  //   { id: 6, name: "Provider F" },
  // ];
  // const handleViewChange = (view) => {
  //   console.log(`View changed to: ${view}`);
  // };
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

  const getMainContent = () => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    if (currentView === "list") {
      console.log("Rendering List View", providers);
      return <div>List View Content</div>;
    }
    if (currentView === "calendar") {
      return <div>Calendar View Content</div>;
    }
  };

  return (
    <>
      <Layout
        showFilters={true}
        currentView={currentView}
        handleViewToggle={handleViewToggle}
        filters={filters}
        onFilterChange={handleFilterChange}
        onApplyFilters={handleApplyFilters}
        onClearFilters={handleClearFilters}
        providers={providers}
        selectedProviders={selectedSearchProviders}
        onSelectProvider={handleSelectProvider}
        onRemoveProvider={handleRemoveProvider}
      >
        {getMainContent()}
      </Layout>
    </>
  );
}

export default RosterManagement;
