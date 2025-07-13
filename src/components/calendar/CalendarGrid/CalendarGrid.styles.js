import styled from "styled-components";

export const CalendarGridContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 16px;
  overflow: hidden;
`;

export const TimeColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 60px;
  border-right: 1px solid #eee;
  :first-child {
    width: 60px;
    height: 60px;
  }
`;

export const DayColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #eee;

  :first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const DayHeader = styled.div`
  padding: 4px;
  text-align: center;
  font-weight: 500;
  border-bottom: 1px solid #eee;
`;
export const CircularDateBackground = styled.div`
  width: 25.5px;
  height: 25.5px;
  border-radius: 50%;
  background-color: ${(props) => (props.isToday ? "#607447" : "transparent")};
  color: ${(props) => (props.isToday ? "#fff" : "inherit")};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
`;

export const GridCell = styled.div`
  flex: 1;
  min-height: 60px;
  border-bottom: 1px solid #eee;
  position: relative;
  background-color: ${(props) => (props.isWeekend ? "#f9f9f9" : "#fff")};
`;

export const TimeSlot = styled.div`
  padding: 4px;
  text-align: right;
  font-size: 12px;
  color: #666;
  border-bottom: 1px solid #eee;
  height: 60px;
`;

export const ProviderSlot1 = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  background-color: ${(props) => props.color};
  border-radius: 3px;
  z-index: 1;
`;

export const ProviderSlot = styled.div`
  position: absolute;
  top: 2px;
  left: ${(props) => (props.multiple ? `${props.index * 4 + 2}px` : "2px")};
  right: 2px;
  bottom: 2px;
  width: ${(props) => (props.multiple ? "4px" : "calc(100% - 4px)")};
  background-color: ${(props) => props.color};
  border-radius: 2px;
  z-index: 1;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    z-index: 2;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
