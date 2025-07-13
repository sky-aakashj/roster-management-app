import { useSelector } from "react-redux";
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import CalendarGrid from "../CalendarGrid/CalendarGrid";
import * as S from "./CalendarView.styles";

const CalendarView = () => {
  const { viewMode, currentdate, dateRange } = useSelector(
    (state) => state.calendar
  );
  const { selectedProviders } = useSelector((state) => state.search);
  return (
    <S.CalendarViewContainer>
      <CalendarHeader />
      <CalendarGrid
        viewMode={viewMode}
        currentdate={currentdate}
        dateRange={dateRange}
        selectedProviders={selectedProviders}
      />
    </S.CalendarViewContainer>
  );
};

export default CalendarView;
