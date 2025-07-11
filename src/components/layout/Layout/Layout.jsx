import { useState } from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import FilterPanel from "../FilterPanel/FilterPanel";
import * as S from "./Layout.styles";
import SearchPanel from "../SearchPanel/SearchPanel";

const Layout = ({
  children,
  showFilters = true,
  currentView,
  handleViewToggle,
  filters,
  onFilterChange,
  onApplyFilters,
  onClearFilters,
  providers,
  selectedProviders,
  onSelectProvider,
  onRemoveProvider,
}) => {
  const [showSideBar, setShowSidebar] = useState(true);
  const onBackClick = () => {
    setShowSidebar((prev) => !prev);
  };
  return (
    <S.LayoutContainer>
      <Header
        title={"Provider Calender"}
        currentView={currentView}
        handleViewToggle={handleViewToggle}
        showSidebar={showSideBar}
        onBackClick={onBackClick}
      />
      <S.MainContent>
        {showSideBar && (
          <S.Sidebar>
            {showFilters && currentView === "list" && (
              <FilterPanel
                filters={filters}
                onFilterChange={onFilterChange}
                onApplyFilters={onApplyFilters}
                onClearFilters={onClearFilters}
              />
            )}
            <SearchPanel
              providers={providers}
              onSelectProvider={onSelectProvider}
              onRemoveProvider={onRemoveProvider}
              selectedProviders={selectedProviders}
            />
          </S.Sidebar>
        )}
        <S.ContentArea>
          <div>{children}</div>
        </S.ContentArea>
      </S.MainContent>
    </S.LayoutContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showFilters: PropTypes.bool,
  currentView: PropTypes.oneOf(["list", "calendar"]),
  handleViewToggle: PropTypes.func,
  filters: PropTypes.shape({
    services: PropTypes.array,
    types: PropTypes.array,
    centers: PropTypes.array,
  }),
  onFilterChange: PropTypes.func,
  onApplyFilters: PropTypes.func,
  onClearFilters: PropTypes.func,
  providers: PropTypes.array,
  selectedProviders: PropTypes.array,
  onSelectProvider: PropTypes.func,
  onRemoveProvider: PropTypes.func,
};

export default Layout;
