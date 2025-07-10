import Layout from "../../components/layout/Layout/Layout";

function RosterManagement() {
  const handleViewChange = (view) => {
    console.log(`View changed to: ${view}`);
  };
  return (
    <>
      <Layout
        showFilters={true}
        onViewChange={handleViewChange}
        currentView={"list"}
      ></Layout>
    </>
  );
}

export default RosterManagement;
