import { useSelector } from "react-redux";
import * as S from "./CalendarGrid.styles";
import { CHIP_COLORS } from "../../../utils/constants";

const CalendarGrid = ({ viewMode, selectedProviders }) => {
  const { currentDate, dateRange } = useSelector((state) => state.calendar);

  // Generate time slots from 8 AM to 11 PM
  const timeSlots = [];
  for (let hour = 8; hour <= 23; hour++) {
    timeSlots.push(`${hour.toString().padStart(2, "0")}:00`);
  }

  // Generate days for the week
  const getWeekDays = (date) => {
    const days = [];
    const numDays = viewMode === "weekly" ? 7 : 1;

    for (let i = 0; i < numDays; i++) {
      const day = new Date(dateRange.startDate);
      day.setDate(day.getDate() + i);
      days.push(day);
    }

    return days;
  };

  const weekDays = getWeekDays(currentDate);
  const today = new Date();

  // Check if slot has provider availability
  const hasProviderAvailability = (day, time) => {
    return selectedProviders?.some((provider) => {
      const providerDay = new Date(day).toDateString();
      return provider.availabilities.some((avail) => {
        const availDay = new Date(avail.date).toDateString();
        return (
          availDay === providerDay &&
          (avail.online_slots.includes(time) ||
            avail.offline_slots.includes(time) ||
            avail.both_slots.includes(time))
        );
      });
    });
  };

  return (
    <S.CalendarGridContainer>
      <S.TimeColumn>
        <S.DayHeader></S.DayHeader>
        {timeSlots.map((time) => (
          <S.TimeSlot key={time}>{time}</S.TimeSlot>
        ))}
      </S.TimeColumn>

      {weekDays.map((day, dayIndex) => (
        <S.DayColumn key={dayIndex}>
          <S.DayHeader>
            <span>
              {day.toLocaleDateString("en-US", { weekday: "short" })}{" "}
            </span>
            <S.CircularDateBackground
              isToday={day.toDateString() === today.toDateString()}
            >
              {day.getDate()}
            </S.CircularDateBackground>
          </S.DayHeader>

          {timeSlots.map((time, timeIndex) => {
            const hasAvailability = hasProviderAvailability(day, time);
            const providerIndex =
              selectedProviders?.findIndex(/* logic to find provider */);
            const bgColor = hasAvailability
              ? CHIP_COLORS[providerIndex % CHIP_COLORS.length]
              : "#fff";

            return (
              <S.GridCell key={timeIndex}>
                {hasAvailability && <S.ProviderSlot color={bgColor} />}
              </S.GridCell>
            );
          })}
        </S.DayColumn>
      ))}
    </S.CalendarGridContainer>
  );
};

export default CalendarGrid;
