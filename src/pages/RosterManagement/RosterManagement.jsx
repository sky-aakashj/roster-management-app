import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentView } from "../../redux/actions/viewActions";
import { fetchProviders } from "../../redux/actions/providerActions";
import { getFilteredProviders } from "../../redux/selectors";
import Layout from "../../components/layout/Layout/Layout";
import ListViewContainer from "../../components/layout/ListViewContainer/ListViewContainer";

function RosterManagement() {
  const dispatch = useDispatch();
  const [selectedSearchProviders, setSelectedSearchProviders] = useState([]);
  const currentView = useSelector((state) => state.view.currentView);
  const { providers, loading, error } = useSelector((state) => state.providers);
  const filteredProviders = useSelector(getFilteredProviders);
  console.log("filteredProviders:", filteredProviders);

  useEffect(() => {
    dispatch(fetchProviders());
  }, [dispatch]);
  const handleViewToggle = (view) => {
    dispatch(setCurrentView(view));
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
      return <ListViewContainer />;
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
