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
            {showFilters && currentView === "list" && <FilterPanel />}
            <SearchPanel />
          </S.Sidebar>
        )}
        <S.ContentArea>{children}</S.ContentArea>
      </S.MainContent>
    </S.LayoutContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showFilters: PropTypes.bool,
  currentView: PropTypes.oneOf(["list", "calendar"]),
  handleViewToggle: PropTypes.func,
  providers: PropTypes.array,
  selectedProviders: PropTypes.array,
  onSelectProvider: PropTypes.func,
  onRemoveProvider: PropTypes.func,
};

export default Layout;
