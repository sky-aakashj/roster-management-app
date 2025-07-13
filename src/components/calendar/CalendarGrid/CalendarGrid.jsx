import * as S from "./CalendarGrid.styles";

const CalendarGrid = ({
  selectedProviders,
  currentDate,
  viewMode,
  dateRange,
}) => {
  // Time slots from 8 AM to 11 PM (24-hour format)
  const timeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];

  // Generate date columns based on view mode
  const generateDateColumns = () => {
    const columns = [];
    const start = new Date(dateRange?.startDate);
    const end = new Date(dateRange?.endDate);

    const current = new Date(start);
    while (current <= end) {
      columns.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return columns;
  };

  const dateColumns = generateDateColumns();

  // Format time for display
  const formatTime = (timeStr) => {
    const [hours, minutes] = timeStr.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  // Get providers for a specific time slot
  const getProvidersForTimeSlot = (timeSlot) => {
    const providers = [];

    selectedProviders?.forEach((provider) => {
      if (provider.availabilities && provider.availabilities.length > 0) {
        const availability = provider.availabilities[0];
        const slot = timeSlot;

        // Check if provider has availability at this time
        let status = null;
        let slotType = null;

        // Check online slots
        if (
          availability.online_slots &&
          availability.online_slots.includes(slot)
        ) {
          status = "available";
          slotType = "online";
        }

        // Check offline slots
        if (
          availability.offline_slots &&
          availability.offline_slots.includes(slot)
        ) {
          status = "available";
          slotType = "offline";
        }

        // Check both slots
        if (availability.both_slots && availability.both_slots.includes(slot)) {
          status = "available";
          slotType = "both";
        }

        // Check if slot is booked
        if (
          availability.online_booked_slots &&
          availability.online_booked_slots.includes(slot)
        ) {
          status = "booked";
          slotType = "online";
        }

        if (
          availability.offline_booked_slots &&
          availability.offline_booked_slots.includes(slot)
        ) {
          status = "booked";
          slotType = "offline";
        }

        // Check if slot is blocked
        if (availability.blocked_slots) {
          const blockedSlot = availability.blocked_slots.find(
            (blocked) => blocked.slot === slot
          );
          if (blockedSlot) {
            status = "blocked";
            slotType = blockedSlot.reason;
          }
        }

        if (status) {
          providers.push({
            id: provider.id,
            name: provider.name,
            color: provider.color,
            status,
            slotType,
          });
        }
      }
    });

    return providers;
  };

  // Generate grid cells for time slots
  const generateTimeSlotCells = (timeSlot, dateColumns) => {
    return dateColumns.map((date, colIndex) => {
      const providers = getProvidersForTimeSlot(timeSlot);

      return (
        <S.GridCell key={`${timeSlot}-${colIndex}`}>
          {providers.length > 0 && (
            <S.SlotContainer>
              {providers.map((provider, index) => (
                <S.ProviderSlot
                  key={`${provider.id}-${index}`}
                  color={provider.color}
                  status={provider.status}
                  style={{
                    zIndex: providers.length - index,
                    top: `${index * 2}px`,
                    left: `${index * 2}px`,
                  }}
                >
                  <S.ProviderInfo>
                    <S.SlotDetails>
                      {provider.status === "blocked" && (
                        <S.BlockedIndicator>
                          {provider.slotType}
                        </S.BlockedIndicator>
                      )}
                    </S.SlotDetails>
                  </S.ProviderInfo>
                </S.ProviderSlot>
              ))}
            </S.SlotContainer>
          )}
        </S.GridCell>
      );
    });
  };
  const today = new Date();
  return (
    <S.CalendarGridContainer>
      <S.GridWrapper>
        {/* Header Row */}
        <S.HeaderRow>
          {/* Empty cell for time column */}
          <S.TimeHeaderCell />

          {/* Date headers */}
          {dateColumns.map((date, index) => (
            <S.DateHeaderCell key={index}>
              <span>
                {date.toLocaleDateString("en-US", { weekday: "short" })}{" "}
              </span>
              <S.CircularDateBackground
                isToday={date.toDateString() === today.toDateString()}
              >
                {date.getDate()}
              </S.CircularDateBackground>
            </S.DateHeaderCell>
          ))}
        </S.HeaderRow>

        {/* Time rows */}
        {timeSlots.map((timeSlot) => (
          <S.TimeRow key={timeSlot}>
            {/* Time cell */}
            <S.TimeCell>{formatTime(timeSlot)}</S.TimeCell>

            {/* Grid cells for each date */}
            {generateTimeSlotCells(timeSlot, dateColumns)}
          </S.TimeRow>
        ))}
      </S.GridWrapper>
    </S.CalendarGridContainer>
  );
};

export default CalendarGrid;
