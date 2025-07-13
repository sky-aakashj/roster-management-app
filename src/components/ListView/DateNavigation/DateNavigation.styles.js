import styled from "styled-components";

export const DateNavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  gap: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    padding: 12px 8px;
    gap: 8px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-basis: 50%;
  @media (max-width: 768px) {
    flex-basis: 100%;
    gap: 2px;
  }
`;

export const DateText = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #4c4c4c;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const TimeRangeText = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #757575;
  @media (max-width: 768px) {
    font-size: 11px;
  }
`;
export const RightSection = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  flex-basis: 50%;
  @media (max-width: 400px) {
    flex-basis: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 8px;
    justify-content: flex-start;
  }
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
  @media (max-width: 768px) {
    width: 14px;
    height: 7px;
  }
`;
