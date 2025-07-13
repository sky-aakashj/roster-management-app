import styled from "styled-components";

export const ProviderSlotContainer = styled.div`
  display: flex;
  overflow: hidden;
  padding: 24px;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
    gap: 12px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    gap: 8px;
  }
`;

export const LeftSection = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 16px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  overflow-x: auto;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    flex: none;
  }
`;

export const ProviderDetails = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const ProviderImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 64px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

export const ProviderName = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  text-decoration: underline;
  text-align: center;
  color: ${({ theme }) => theme.colors.mossGreen800};

  @media (max-width: 768px) {
    text-align: left;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    text-align: center;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    gap: 6px;
  }

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

export const Icon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: center;
  padding: 2px 8px;
  background: #f7f7f7;
  border-radius: 8px;

  svg {
    width: 16px;
    height: 16px;
  }

  span {
    font-size: 14px;
    font-weight: 600;
    margin-left: 4px;
    color: #4c4c4c;
  }

  &:hover {
    color: #303f9f;
  }

  @media (max-width: 768px) {
    padding: 2px 6px;

    svg {
      width: 14px;
      height: 14px;
    }

    span {
      font-size: 12px;
      margin-left: 2px;
    }
  }

  @media (max-width: 480px) {
    padding: 2px 4px;

    svg {
      width: 12px;
      height: 12px;
    }

    span {
      font-size: 11px;
      margin-left: 2px;
    }
  }
`;

export const ViewCalendarLink = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  border-radius: 8px;
  background: none;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.terracota800};
  cursor: pointer;
  padding: 8px 0;
  text-decoration: underline;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }

  @media (max-width: 768px) {
    padding: 6px 0;
    font-size: 13px;
    gap: 4px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 480px) {
    padding: 4px 0;
    font-size: 12px;
    gap: 3px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const CalendarText = styled.span`
  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
