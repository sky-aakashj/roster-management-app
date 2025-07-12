import styled from "styled-components";

export const ProviderSlotContainer = styled.div`
  display: flex;
  overflow: hidden;
  padding: 24px;
  gap: 16px;
`;

export const LeftSection = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 16px;
`;

export const RightSection = styled.div`
  flex: 1;
  overflow-x: auto;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  display: flex;
  align-items: center;
`;
export const ProviderDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProviderImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 64px;
  object-fit: cover;
`;

export const ProviderName = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  text-decoration: underline;
  text-align: center;
  color: ${({ theme }) => theme.colors.mossGreen800};
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 8px;
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
`;
