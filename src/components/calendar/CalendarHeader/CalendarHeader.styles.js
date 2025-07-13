import styled from "styled-components";

export const CalendarHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const DateText = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #4c4c4c;
`;

export const NavigationButton = styled.button`
  background: none;
  border-radius: 40px;
  cursor: pointer;
  outline: none;
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

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  color: #4c4c4c;
  gap: 8px;
`;

export const LegendColor = styled.div`
  width: 16px;
  height: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.color};
`;
