import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  font-size: 14px;
  max-width: 400px;
`;

export const DropdownTrigger = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => ` ${theme.spacing.sm}`};
  border: 1px solid
    ${({ theme, isOpen, disabled }) =>
      disabled
        ? theme.colors.grey800
        : isOpen
        ? theme.colors.grey800
        : theme.colors.grey600};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.grayLight : theme.colors.white};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease;
  min-height: 38px;

  &:hover {
    border-color: ${({ theme, disabled, isOpen }) =>
      disabled
        ? theme.colors.grey
        : isOpen
        ? theme.colors.grey800
        : theme.colors.grayDark};
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 200px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow: ${({ theme }) => theme.shadows.md};
  z-index: 100;
  margin-top: 4px;
`;

export const DropdownItem = styled.div`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  cursor: pointer;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.mossGreen100 : "transparent"};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.mossGreen900 : theme.colors.text};

  &:hover {
    background-color: ${({ theme }) => theme.colors.mossGreen200};
  }
`;

export const ChevronIcon = styled.span`
  color: ${({ theme }) => theme.colors.grey800};
  transition: transform 0.2s ease;

  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SelectedText = styled.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.borderRadius.grey800};
  font-weight: 500;
`;

export const PlaceholderText = styled.span`
  flex: 1;
  color: ${({ theme }) => theme.colors.gray};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ClearButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.gray};
  cursor: pointer;
  padding: 0 4px;
  margin-right: 4px;
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;
