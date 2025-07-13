import { useSelector } from "react-redux";
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import CalendarGrid from "../CalendarGrid/CalendarGrid";
import * as S from "./CalendarView.styles";

const CalendarView = () => {
  const { viewMode } = useSelector((state) => state.calendar);
  const selectedProviders = useSelector(
    (state) => state.providers.selectedProviders
  );
  return (
    <S.CalendarViewContainer>
      <CalendarHeader />
      <CalendarGrid viewMode={viewMode} selectedProviders={selectedProviders} />
    </S.CalendarViewContainer>
  );
};

export default CalendarView;
