import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { BiClinic } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { PiVideoCamera } from "react-icons/pi";
import TimeSlotGrid from "../TimeSlotGrid/TimeSlotGrid";
import * as S from "./ProviderSlot.styles";
import { addSelectedProvider } from "../../../redux/actions/searchActions";
import { setCurrentView } from "../../../redux/actions/viewActions";

const ProviderSlot = ({ provider, selectedDate }) => {
  const dispatch = useDispatch();

  const handleViewCalendar = () => {
    // Add provider to selectedProviders
    dispatch(addSelectedProvider(provider));
    // Switch to calendar view
    dispatch(setCurrentView("calendar"));
  };
  return (
    <S.ProviderSlotContainer>
      <S.LeftSection>
        <S.ProviderDetails>
          <S.ProviderImage src={provider.image} alt={provider.name} />
          <S.ProviderName>{provider.name}</S.ProviderName>
        </S.ProviderDetails>

        <S.IconsContainer>
          <S.Icon>
            <BiClinic /> <span>{5}</span>
          </S.Icon>
          <S.Icon>
            <PiVideoCamera /> <span>{5}</span>
          </S.Icon>
        </S.IconsContainer>

        <S.ViewCalendarLink onClick={handleViewCalendar}>
          <S.CalendarText>View Calendar</S.CalendarText> <IoIosArrowForward />
        </S.ViewCalendarLink>
      </S.LeftSection>

      <S.RightSection>
        <TimeSlotGrid provider={provider} selectedDate={selectedDate} />
      </S.RightSection>
    </S.ProviderSlotContainer>
  );
};

ProviderSlot.propTypes = {
  provider: PropTypes.object.isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
};

export default ProviderSlot;
