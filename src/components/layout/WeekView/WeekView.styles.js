import styled from "styled-components";

export const WeekViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  gap: 16px;
`;

export const NavigationButton = styled.button`
  background: none;
  border-radius: 40px;
  cursor: pointer;
  padding: 4px;
  border: 1px solid #e0e0e0;
  color: ${({ theme }) => theme.colors.mossGreen900};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 22px;
    height: 22px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.mossGreen200};
  }
`;

export const WeekDaysContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
`;

export const DayButton = styled.button`
  display: flex;
  width: 120px;
  font-size: 14px;
  height: 48px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.isActive ? "#4E6137" : "#fff")};

  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 4px 8px;
  min-width: 50px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => (props.isActive ? "#DBE7CC" : "#f5f5f5")};
  }

  div:first-child {
    font-size: 10px;
    font-weight: 500;
    color: ${(props) => (props.isActive ? "#fff" : "#9e9e9e")};
  }

  div:last-child {
    font-size: 1rem;
    color: ${(props) => (props.isActive ? "#fff" : "#4C4C4C")};
  }
`;
