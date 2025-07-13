import styled from "styled-components";

export const CalendarGridContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 0px 16px;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 60px repeat(auto-fit, minmax(150px, 1fr));
  min-width: 100%;
  position: relative;
`;

export const HeaderRow = styled.div`
  display: contents;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const TimeHeaderCell = styled.div`
  border-bottom: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  width: 60px;
  height: 60px;
  padding: 4px;
`;

export const DateHeaderCell = styled.div`
  border-bottom: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  padding: 4px;
  font-weight: 500;
  font-size: 13px;
  color: ${(props) => (props.isToday ? "#fff" : "inherit")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export const TimeRow = styled.div`
  display: contents;
`;

export const TimeCell = styled.div`
  border-bottom: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  padding: 8px 4px;
  font-size: 11px;
  color: #666;
  text-align: center;
  font-weight: 500;
  position: sticky;
  left: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
`;

export const GridCell = styled.div`
  border-bottom: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  min-height: 60px;
  position: relative;
`;

export const SlotContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2px;
`;

export const ProviderSlot = styled.div`
  position: absolute;
  left: 2px;
  right: 2px;
  top: 2px;
  bottom: 2px;
  background-color: ${(props) => props.color || "#e3f2fd"};

  font-size: 11px;
  color: #333;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) =>
    props.status === "booked" &&
    `
    background-color: #ffebee;
    border-color: #f44336;
    opacity: 0.8;
  `}

  ${(props) =>
    props.status === "blocked" &&
    `
    background-color: #f5f5f5;
    border-color: #9e9e9e;
    opacity: 0.7;
  `}
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 20 !important;
  }
`;

export const ProviderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  height: 100%;
  justify-content: space-between;
`;

export const ProviderName = styled.div`
  font-weight: 600;
  font-size: 10px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
`;

export const SlotDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 9px;
`;

export const SlotType = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-size: 8px;
  color: #666;

  ${(props) =>
    props.type === "online" &&
    `
    color: #2196f3;
  `}

  ${(props) =>
    props.type === "offline" &&
    `
    color: #ff9800;
  `}
  
  ${(props) =>
    props.type === "both" &&
    `
    color: #4caf50;
  `}
`;

export const BookedIndicator = styled.span`
  background-color: #f44336;
  color: white;
  padding: 1px 4px;
  border-radius: 2px;
  font-size: 8px;
  font-weight: 600;
`;

export const BlockedIndicator = styled.span`
  background-color: #757575;
  color: white;
  padding: 1px 4px;
  border-radius: 2px;
  font-size: 8px;
  font-weight: 600;
`;

// Responsive styles
export const ResponsiveWrapper = styled.div`
  @media (max-width: 768px) {
    ${GridWrapper} {
      grid-template-columns: 60px repeat(auto-fit, minmax(100px, 1fr));
    }

    ${ProviderName} {
      font-size: 9px;
    }

    ${TimeCell} {
      font-size: 10px;
      padding: 4px 2px;
    }

    ${DateHeaderCell} {
      font-size: 12px;
      padding: 8px 4px;
    }
  }

  @media (max-width: 480px) {
    ${GridWrapper} {
      grid-template-columns: 50px repeat(auto-fit, minmax(80px, 1fr));
    }

    ${ProviderSlot} {
      padding: 2px 3px;
    }

    ${ProviderName} {
      font-size: 8px;
    }

    ${SlotDetails} {
      font-size: 8px;
    }
  }
`;
