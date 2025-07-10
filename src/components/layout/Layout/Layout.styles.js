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
`;

export const ContentArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.md};
`;
