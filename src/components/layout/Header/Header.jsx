import PropTypes from "prop-types";
import * as S from "./Header.styles";
import { FaListUl } from "react-icons/fa";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { FiCalendar } from "react-icons/fi";

const Header = ({
  currentView,
  onViewChange,
  title,
  setShowSidebar,
  showSidebar,
}) => {
  const handleViewToggle = (view) => {
    onViewChange(view);
  };
  const onBackClick = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <S.HeaderContainer>
      <S.BackButton onClick={onBackClick}>
        {showSidebar ? (
          <MdKeyboardDoubleArrowLeft />
        ) : (
          <MdKeyboardDoubleArrowRight />
        )}
      </S.BackButton>
      <S.Title>{title}</S.Title>
      <S.ViewToggle>
        <S.ViewButton
          active={currentView === "list"}
          onClick={() => handleViewToggle("list")}
        >
          <FaListUl />
        </S.ViewButton>
        <S.ViewButton
          active={currentView === "calendar"}
          onClick={() => handleViewToggle("calendar")}
        >
          <FiCalendar />
        </S.ViewButton>
      </S.ViewToggle>
    </S.HeaderContainer>
  );
};

Header.propTypes = {
  currentView: PropTypes.oneOf(["list", "calendar"]).isRequired,
  onViewChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  setShowSidebar: PropTypes.func.isRequired,
  showSidebar: PropTypes.bool.isRequired,
};

export default Header;
