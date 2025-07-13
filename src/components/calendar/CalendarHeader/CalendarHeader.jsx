import { useDispatch, useSelector } from "react-redux";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  setCalendarDate,
  setCalendarDateRange,
  setCalendarViewMode,
} from "../../../redux/actions/calendarActions";
import * as S from "./CalendarHeader.styles";
import Dropdown from "../../common/Dropdown/Dropdown";

const CalendarHeader = () => {
  const dispatch = useDispatch();
  const { currentDate, viewMode, dateRange } = useSelector(
    (state) => state.calendar
  );

  const formatDateRange = (start, end) => {
    if (viewMode === "daily") {
      return start.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    }
    return `${start.getDate()}-${end.getDate()} ${start.toLocaleDateString(
      "en-US",
      { month: "short", year: "numeric" }
    )}`;
  };

  const handlePrev = () => {
    const days = viewMode === "weekly" ? 7 : 1;
    const newStart = new Date(dateRange.startDate);
    newStart.setDate(newStart.getDate() - days);
    const newEnd = new Date(dateRange.endDate);
    newEnd.setDate(newEnd.getDate() - days);
    dispatch(setCalendarDateRange({ startDate: newStart, endDate: newEnd }));
  };

  const handleNext = () => {
    const days = viewMode === "weekly" ? 7 : 1;
    const newStart = new Date(dateRange.startDate);
    newStart.setDate(newStart.getDate() + days);
    const newEnd = new Date(dateRange.endDate);
    newEnd.setDate(newEnd.getDate() + days);
    dispatch(setCalendarDateRange({ startDate: newStart, endDate: newEnd }));
  };

  const handleViewModeChange = (selected) => {
    dispatch(setCalendarViewMode(selected.value));
  };

  const ModeOptions = [
    { value: "weekly", label: "Weekly" },
    { value: "daily", label: "Daily" },
  ];

  return (
    <S.CalendarHeaderContainer>
      <S.LeftSection>
        <S.NavigationButton onClick={handlePrev}>
          <FaChevronLeft />
        </S.NavigationButton>
        <S.NavigationButton onClick={handleNext}>
          <FaChevronRight />
        </S.NavigationButton>
        <S.DateText>
          {formatDateRange(dateRange.startDate, dateRange.endDate)}
        </S.DateText>
      </S.LeftSection>

      <S.RightSection>
        <S.LegendItem>
          <S.LegendColor color="#757575" /> Session Event
        </S.LegendItem>
        <S.LegendItem>
          <S.LegendColor color="#4C4C4C" /> Calendar Event
        </S.LegendItem>
        <Dropdown
          options={ModeOptions}
          value={viewMode}
          onChange={handleViewModeChange}
        />
      </S.RightSection>
    </S.CalendarHeaderContainer>
  );
};

export default CalendarHeader;
