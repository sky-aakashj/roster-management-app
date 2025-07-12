import { useSelector } from "react-redux";
import * as S from "./DateNavigation.styles";

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
            <S.LegendColor color="#97CC55" /> Online
          </S.LegendItem>
          <S.LegendItem>
            <S.LegendColor color="#355E80" /> Online Booked
          </S.LegendItem>
        </S.GroupLegend>
        <S.GroupLegend>
          <S.LegendItem>
            <S.LegendColor color="#E76943" /> Offline
          </S.LegendItem>
          <S.LegendItem>
            <S.LegendColor color="#80490B" /> Offline Booked
          </S.LegendItem>
        </S.GroupLegend>
        <S.GroupLegend>
          <S.LegendItem>
            <S.LegendColor color="#2196F3" /> Online + Offline
          </S.LegendItem>
          <S.LegendItem>
            <S.LegendColor color="#C73031" /> Blocked
          </S.LegendItem>
        </S.GroupLegend>
      </S.RightSection>
    </S.DateNavigationContainer>
  );
};

export default DateNavigation;
