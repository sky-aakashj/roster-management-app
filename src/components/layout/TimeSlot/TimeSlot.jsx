import PropTypes from "prop-types";
import * as S from "./TimeSlot.styles";
import { SLOT_STATUS_COLORS } from "../../../utils/constants";

const TimeSlot = ({ time, status }) => {
  return (
    <S.TimeSlotButton
      status={status}
      backgroundColor={SLOT_STATUS_COLORS[status] || "#E0E0E0"}
    >
      {time}
    </S.TimeSlotButton>
  );
};

TimeSlot.propTypes = {
  time: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default TimeSlot;
