import styled, { css, keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  font-family: inherit;
  outline: none;
  position: relative;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const sizeStyles = {
  small: css`
    padding: 8px 24px;
    font-size: 14px;
  `,
  medium: css`
    padding: 10px 24px;
    font-size: 16px;
  `,
  large: css`
    padding: 12px 24px;
    font-size: 18px;
  `,
};

const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primaryDark};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.secondaryDark};
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primaryLight};
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.grayLight};
    }
  `,
};

export const StyledButton = styled.button`
  ${baseStyles}
  ${({ size }) => sizeStyles[size]}
  ${({ variant }) => variantStyles[variant]}
`;

export const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: ${spin} 1s ease-in-out infinite;
  margin: 0 auto;
`;
