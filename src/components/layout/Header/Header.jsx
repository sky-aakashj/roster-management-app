import PropTypes from "prop-types";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import * as S from "./Header.styles";

const Header = ({
  currentView,
  handleViewToggle,
  title,
  showSidebar,
  onBackClick,
}) => {
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
  handleViewToggle: PropTypes.func.isRequired,
  title: PropTypes.string,
  showSidebar: PropTypes.bool.isRequired,
  onBackClick: PropTypes.func,
};

export default Header;
