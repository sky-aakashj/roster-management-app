import { SET_SELECTED_DATE } from "../actionsTypes";

export const setSelectedDate = (date) => ({
  type: SET_SELECTED_DATE,
  payload: date,
});
