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

  return (
    <S.WeekViewContainer>
      <S.NavigationButton onClick={handlePrevWeek}>
        <FaChevronLeft />
      </S.NavigationButton>

      <S.WeekDaysContainer>
        {weekDays.map((day, index) => (
          <S.DayButton
            key={index}
            isActive={day.toDateString() === selectedDate.toDateString()}
            onClick={() => handleDateSelect(day)}
          >
            <div>{day.toLocaleDateString("en-US", { weekday: "short" })}</div>
            <div>{day.getDate()}</div>
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
