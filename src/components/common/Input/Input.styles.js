import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

export const StyledInput = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.colors.grey600};

  padding: ${({ hasIcon, theme }) =>
    hasIcon
      ? `12px 12px 12px 40px`
      : `${theme.spacing.sm} ${theme.spacing.md}`};
  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? theme.colors.error : theme.colors.grey600};
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  outline: none;

  &:focus {
    border-color: ${({ theme, hasError }) =>
      hasError ? theme.colors.error : theme.colors.mossGreen200};
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
  color: ${({ theme }) => theme.colors.grey800};
  font-size: 14px;
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

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
