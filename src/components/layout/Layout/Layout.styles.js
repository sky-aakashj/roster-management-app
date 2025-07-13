import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.grayLight};
`;

export const MainContent = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
`;

export const Sidebar = styled.div`
  width: 360px;
  flex-shrink: 0;
  overflow-y: auto;
  padding: 24px;
  border-right: 1px solid ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.white};
  @media (max-width: 768px) {
    position: absolute;
    height: 100vh;
    width: 80vw;
    z-index: 100;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  }
`;

export const ContentArea = styled.div`
  flex: 1;
  overflow-y: auto;
`;
