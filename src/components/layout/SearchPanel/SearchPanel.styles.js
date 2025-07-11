import styled from "styled-components";

export const SearchPanelContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacing.md};
  input {
    padding-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const SearchResults = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  div {
    padding: ${({ theme }) => theme.spacing.sm};
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.grayLight};
    }
  }
`;

export const SelectedProviders = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ProviderChip = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};

  button {
    background: none;
    border: none;
    margin-left: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.grayDark};
    cursor: pointer;
    display: flex;
    align-items: center;
    with: 24px;
    height: 24px;

    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }

    svg {
      font-size: 12px;
    }
  }
`;

export const ClearAllButton = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const SearchInfo = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.gray800};
  font-size: 14px;
`;
