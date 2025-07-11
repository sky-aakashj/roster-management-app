import { SET_CURRENT_VIEW } from "../actionsTypes";

export const setCurrentView = (view) => ({
  type: SET_CURRENT_VIEW,
  payload: view,
});
