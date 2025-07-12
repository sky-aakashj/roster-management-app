import { useSelector } from "react-redux";
import * as S from "./DateNavigation.styles";
import { SLOT_STATUS_COLORS } from "../../../utils/constants";

const DateNavigation = () => {
  const selectedDate = useSelector((state) => state.date.selectedDate);

  // Format date as "Thu, 21 Sep 2024"
  const formattedDate = selectedDate.toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <S.DateNavigationContainer>
      <S.LeftSection>
        <S.DateText>Showing full schedules for {formattedDate}</S.DateText>
        <S.TimeRangeText>
          Showing slots in the 8 am to 12 am window.
        </S.TimeRangeText>
      </S.LeftSection>

      <S.RightSection>
        <S.GroupLegend>
          <S.LegendItem>
            <S.LegendColor color={SLOT_STATUS_COLORS.online} /> Online
          </S.LegendItem>
          <S.LegendItem>
            <S.LegendColor color={SLOT_STATUS_COLORS.online_booked} /> Online
            Booked
          </S.LegendItem>
        </S.GroupLegend>
        <S.GroupLegend>
          <S.LegendItem>
            <S.LegendColor color={SLOT_STATUS_COLORS.offline} /> Offline
          </S.LegendItem>
          <S.LegendItem>
            <S.LegendColor color={SLOT_STATUS_COLORS.offline_booked} /> Offline
            Booked
          </S.LegendItem>
        </S.GroupLegend>
        <S.GroupLegend>
          <S.LegendItem>
            <S.LegendColor color={SLOT_STATUS_COLORS.both} /> Online + Offline
          </S.LegendItem>
          <S.LegendItem>
            <S.LegendColor color={SLOT_STATUS_COLORS.blocked} /> Blocked
          </S.LegendItem>
        </S.GroupLegend>
      </S.RightSection>
    </S.DateNavigationContainer>
  );
};

export default DateNavigation;
