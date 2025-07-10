import PropTypes from "prop-types";
import Header from "../Header/Header";
import FilterPanel from "../FilterPanel/FilterPanel";
import * as S from "./Layout.styles";
import SearchPanel from "../SearchPanel/SearchPanel";

const Layout = ({
  //   children,
  showFilters = true,
  currentView,
  onViewChange,
  filters,
  onFilterChange,
  onApplyFilters,
  onClearFilters,
}) => {
  return (
    <S.LayoutContainer>
      <Header
        title={"Provider Calender"}
        currentView={currentView}
        onViewChange={onViewChange}
      />
      <S.MainContent>
        {showFilters && (
          <S.Sidebar>
            <FilterPanel
              filters={filters}
              onFilterChange={onFilterChange}
              onApplyFilters={onApplyFilters}
              onClearFilters={onClearFilters}
            />
            <SearchPanel />
          </S.Sidebar>
        )}
        <S.ContentArea>
          <div>content here</div>
        </S.ContentArea>
      </S.MainContent>
    </S.LayoutContainer>
  );
};

Layout.propTypes = {
  //   children: PropTypes.node.isRequired,
  showFilters: PropTypes.bool,
  currentView: PropTypes.oneOf(["list", "calendar"]),
  onViewChange: PropTypes.func,
  filters: PropTypes.shape({
    services: PropTypes.array,
    types: PropTypes.array,
    centers: PropTypes.array,
  }),
  onFilterChange: PropTypes.func,
  onApplyFilters: PropTypes.func,
  onClearFilters: PropTypes.func,
  clinics: PropTypes.array,
};

export default Layout;
