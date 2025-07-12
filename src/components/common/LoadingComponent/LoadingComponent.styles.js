import styled, { keyframes } from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 462px;
  background-color: white;
  gap: 16px;
  padding: 20px;
`;

export const LoadingIcon = styled(AiOutlineLoading3Quarters)`
  font-size: 48px;
  color: #6c757d;
  animation: ${spin} 1s linear infinite;
`;

export const LoadingText = styled.div`
  font-size: 16px;
  color: #6c757d;
  font-weight: 500;
  text-align: center;
  margin: 0;
`;

export const LoadingSubText = styled.div`
  font-size: 14px;
  color: #adb5bd;
  text-align: center;
  margin-top: 4px;
  margin: 0;
`;
