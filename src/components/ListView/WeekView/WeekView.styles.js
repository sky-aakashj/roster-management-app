import styled from "styled-components";

export const WeekViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  gap: 8px;
  width: 100%;
  max-width: 100%;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 16px 24px;
    gap: 16px;
  }
`;

export const NavigationButton = styled.button`
  background: none;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  padding: 8px;
  border: 1px solid #e0e0e0;
  color: ${({ theme }) => theme.colors.mossGreen900};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  transition: all 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.mossGreen200};
  }

  &:active {
    transform: scale(0.95);
  }

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    padding: 10px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const WeekDaysContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  gap: 4px;
  min-width: 0;

  @media (min-width: 480px) {
    gap: 6px;
  }

  @media (min-width: 768px) {
    gap: 8px;
  }
`;

export const DayButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => {
    if (props.isActive) return "#4E6137";
    if (props.isToday) return "#f8f9fa";
    return "#fff";
  }};
  border: 1px solid
    ${(props) => {
      if (props.isActive) return "#4E6137";
      if (props.isToday) return "#4E6137";
      return "#e0e0e0";
    }};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  flex: 1;
  min-width: 0;
  height: 44px;
  padding: 4px 2px;

  &:hover {
    background: ${(props) => {
      if (props.isActive) return "#5a7142";
      if (props.isToday) return "#DBE7CC";
      return "#f5f5f5";
    }};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (min-width: 480px) {
    height: 48px;
    padding: 6px 4px;
  }

  @media (min-width: 768px) {
    height: 52px;
    padding: 8px 6px;
    min-width: 60px;
  }

  @media (min-width: 1024px) {
    min-width: 80px;
  }
`;

export const WeekdayText = styled.div`
  font-size: 10px;
  font-weight: 500;
  color: ${(props) => (props.isActive ? "#fff" : "#9e9e9e")};
  line-height: 1;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 11px;
    margin-bottom: 4px;
  }
`;

export const DateText = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.isActive ? "#fff" : "#4C4C4C")};
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
