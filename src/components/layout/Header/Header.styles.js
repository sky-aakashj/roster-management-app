import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.white};
  position: sticky;
  gap: 8px;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #e0e0e0;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.grey800};
  font-size: 18px;
  cursor: pointer;
  padding: 8px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.mossGreen200};
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  flex: 1;
  text-align: left;
`;

export const ViewToggle = styled.div`
  display: flex;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  button:first-child {
    border-radius: 8px 0px 0px 8px;
`;

export const ViewButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px;
  border-radius: 8px;
  border: none;

  background: ${({ theme, active }) =>
    active ? theme.colors.mossGreen200 : theme.colors.white};
  color: ${({ theme, active }) =>
    active ? theme.colors.mossGreen900 : theme.colors.text};
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    border-color: ${({ theme, active }) =>
      active ? theme.colors.primary : theme.colors.grayDark};
  }
`;
