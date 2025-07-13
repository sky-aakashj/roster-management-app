import PropTypes from "prop-types";
import { BiClinic } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { PiVideoCamera } from "react-icons/pi";
import TimeSlotGrid from "../TimeSlotGrid/TimeSlotGrid";
import * as S from "./ProviderSlot.styles";

const ProviderSlot = ({ provider, selectedDate }) => {
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

        <S.ViewCalendarLink onClick={() => console.log("View Calendar")}>
          View Calendar <IoIosArrowForward />
        </S.ViewCalendarLink>
      </S.LeftSection>

      <S.RightSection>
        <TimeSlotGrid provider={provider} selectedDate={selectedDate} />
      </S.RightSection>
    </S.ProviderSlotContainer>
  );
};

ProviderSlot.propTypes = {
  providers: PropTypes.object.isRequired,
  selectedDate: PropTypes.string.isRequired,
};

export default ProviderSlot;
