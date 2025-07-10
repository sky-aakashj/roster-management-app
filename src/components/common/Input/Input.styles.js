import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: ${({ hasIcon, theme }) =>
    hasIcon
      ? `${theme.spacing.sm} ${theme.spacing.md} ${theme.spacing.sm} 40px`
      : `${theme.spacing.sm} ${theme.spacing.md}`};
  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? theme.colors.error : theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 14px;
  transition: all 0.2s ease;
  outline: none;

  &:focus {
    border-color: ${({ theme, hasError }) =>
      hasError ? theme.colors.error : theme.colors.primary};
    box-shadow: 0 0 0 2px
      ${({ theme, hasError }) =>
        hasError ? `${theme.colors.error}20` : `${theme.colors.primary}20`};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grayLight};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const InputIcon = styled.span`
  position: absolute;
  left: ${({ clickable }) => (clickable ? "auto" : "12px")};
  right: ${({ clickable }) => (clickable ? "12px" : "auto")};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};

  &:hover {
    color: ${({ theme, clickable }) =>
      clickable ? theme.colors.text : theme.colors.gray};
  }
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
  margin-top: 4px;
`;
