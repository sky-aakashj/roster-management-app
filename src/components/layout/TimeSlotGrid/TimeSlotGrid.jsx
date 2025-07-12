import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TimeSlot from "../TimeSlot/TimeSlot";
import * as S from "./TimeSlotGrid.styles";

const TimeSlotGrid = ({ provider, selectedDate }) => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Generate time slots from 8:00 to 23:45 in 15-minute intervals
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const timeString = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        slots.push(timeString);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Group time slots into rows of 4 (for 15-min intervals)
  const timeRows = [];
  for (let i = 0; i < timeSlots.length; i += 4) {
    timeRows.push(timeSlots.slice(i, i + 4));
  }

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = 200; // Adjust as needed

    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
      setScrollPosition(container.scrollLeft - scrollAmount);
    } else {
      container.scrollLeft += scrollAmount;
      setScrollPosition(container.scrollLeft + scrollAmount);
    }
  };
  const getAvailabilityForDate = () => {
    // since api data dont have any date baased availability, we will just return the first availability
    return provider?.availabilities.find(() => true) || {};
  };

  const availability = getAvailabilityForDate();

  const getSlotStatus = (time) => {
    if (availability.blocked_slots?.some((slot) => slot.slot === time)) {
      return "blocked";
    }
    if (availability.online_booked_slots?.includes(time)) {
      return "online_booked";
    }
    if (availability.offline_booked_slots?.includes(time)) {
      return "offline_booked";
    }
    if (availability.online_slots?.includes(time)) {
      return "online";
    }
    if (availability.offline_slots?.includes(time)) {
      return "offline";
    }
    if (availability.both_slots?.includes(time)) {
      return "both";
    }
    return "available";
  };

  return (
    <>
      <S.ScrollButton onClick={() => handleScroll("left")}>
        <FaChevronLeft />
      </S.ScrollButton>

      <S.TimeSlotsWrapper ref={containerRef}>
        {timeRows.map((row, rowIndex) => (
          <S.TimeRow key={row}>
            {row.map((time, colIndex) => (
              <TimeSlot
                key={`${rowIndex}-${colIndex}`}
                time={time}
                status={getSlotStatus(time)}
              />
            ))}
          </S.TimeRow>
        ))}
      </S.TimeSlotsWrapper>

      <S.ScrollButton onClick={() => handleScroll("right")}>
        <FaChevronRight />
      </S.ScrollButton>
    </>
  );
};

export default TimeSlotGrid;
