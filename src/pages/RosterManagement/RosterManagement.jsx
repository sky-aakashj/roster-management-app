import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentView } from "../../redux/actions/viewActions";
import { fetchProviders } from "../../redux/actions/providerActions";
import Layout from "../../components/layout/Layout/Layout";
import ListViewContainer from "../../components/layout/ListViewContainer/ListViewContainer";
import CalendarView from "../../components/calendar/CalendarView/CalendarView";

function RosterManagement() {
  const dispatch = useDispatch();
  const currentView = useSelector((state) => state.view.currentView);

  useEffect(() => {
    dispatch(fetchProviders());
  }, [dispatch]);
  const handleViewToggle = (view) => {
    dispatch(setCurrentView(view));
  };

  const getMainContent = () => {
    if (currentView === "list") {
      return <ListViewContainer />;
    }
    if (currentView === "calendar") {
      return <CalendarView />;
    }
  };

  return (
    <>
      <Layout
        showFilters={true}
        currentView={currentView}
        handleViewToggle={handleViewToggle}
      >
        {getMainContent()}
      </Layout>
    </>
  );
}

export default RosterManagement;
