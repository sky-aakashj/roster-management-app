import styled from "styled-components";

export const DateNavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  gap: 16px;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-basis: 50%;
`;

export const DateText = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #4c4c4c;
`;

export const TimeRangeText = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #757575;
`;
export const RightSection = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  flex-basis: 50%;
`;

export const GroupLegend = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-size: 14px;
  color: #333;
  justify-content: space-evenly;
  gap: 8px;
  flex-basis: 100%;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #4c4c4c;
`;

export const LegendColor = styled.div`
  width: 16px;
  height: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.color};
  margin-right: 4px;
`;
