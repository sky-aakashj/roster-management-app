import styled from "styled-components";

export const FilterContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const FilterActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;
