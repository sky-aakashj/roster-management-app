import {
  SET_CALENDAR_DATE,
  SET_CALENDAR_VIEW_MODE,
  SET_CALENDAR_DATE_RANGE,
} from "../actionsTypes";

export const setCalendarDate = (date) => ({
  type: SET_CALENDAR_DATE,
  payload: date,
});

export const setCalendarViewMode = (mode) => ({
  type: SET_CALENDAR_VIEW_MODE,
  payload: mode,
});

export const setCalendarDateRange = (dateRange) => ({
  type: SET_CALENDAR_DATE_RANGE,
  payload: dateRange,
});
