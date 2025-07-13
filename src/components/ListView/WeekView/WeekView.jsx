import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDate } from "../../../redux/actions/dateActions";
import * as S from "./WeekView.styles";

const WeekView = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.date.selectedDate);
  const [currentDate, setCurrentDate] = useState(new Date());

  // Generate 7 days for the week view
  const getWeekDays = (date) => {
    const days = [];
    const firstDayOfWeek = new Date(date);
    firstDayOfWeek.setDate(date.getDate() - date.getDay()); // Start from Sunday

    for (let i = 0; i < 7; i++) {
      const day = new Date(firstDayOfWeek);
      day.setDate(firstDayOfWeek.getDate() + i);
      days.push(day);
    }

    return days;
  };

  const weekDays = getWeekDays(currentDate);

  const handlePrevWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  const handleDateSelect = (date) => {
    dispatch(setSelectedDate(date));
  };
  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date) => {
    return date.toDateString() === selectedDate.toDateString();
  };

  return (
    <S.WeekViewContainer>
      <S.NavigationButton onClick={handlePrevWeek}>
        <FaChevronLeft />
      </S.NavigationButton>

      <S.WeekDaysContainer>
        {weekDays.map((day) => (
          <S.DayButton
            key={`${day.getFullYear()}-${day.getMonth()}-${day.getDate()}`}
            isActive={isSelected(day)}
            isToday={isToday(day)}
            onClick={() => handleDateSelect(day)}
          >
            <S.WeekdayText isActive={isSelected(day)}>
              {day.toLocaleDateString("en-US", { weekday: "short" })}
            </S.WeekdayText>
            <S.DateText isActive={isSelected(day)}>{day.getDate()}</S.DateText>
          </S.DayButton>
        ))}
      </S.WeekDaysContainer>

      <S.NavigationButton onClick={handleNextWeek}>
        <FaChevronRight />
      </S.NavigationButton>
    </S.WeekViewContainer>
  );
};

export default WeekView;
