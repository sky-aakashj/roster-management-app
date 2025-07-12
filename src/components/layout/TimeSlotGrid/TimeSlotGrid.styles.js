import styled from "styled-components";

export const ScrollButton = styled.button`
  border: 1px solid #e0e0e0;
  cursor: pointer;
  width: 40px;
  background-color: transparent;
  padding: 68px 8px;
  color: #757575;
  flex-shrink: 0;
  height: -webkit-fill-available;
  outline: none;

  &:hover {
    color: #303f9f;
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

export const TimeSlotsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  overflow-x: auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: 16px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TimeRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-right: 16px;
  gap: 16px;
`;
