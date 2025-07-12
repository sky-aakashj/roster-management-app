import styled from "styled-components";

export const TimeSlotButton = styled.button`
  width: 64px;
  height: 28px;
  padding: 4px 8px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) =>
    ["available", "online_booked", "offline_booked"].includes(props.status)
      ? "#333"
      : "#fff"};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
