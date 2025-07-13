import {
  SET_CALENDAR_DATE,
  SET_CALENDAR_VIEW_MODE,
  SET_CALENDAR_DATE_RANGE,
} from "../actionsTypes";

const initialState = {
  currentDate: new Date(),
  viewMode: "weekly", // 'weekly' or 'daily'
  dateRange: {
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 6)),
  },
};

export default function calendarReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CALENDAR_DATE:
      return {
        ...state,
        currentDate: action.payload,
      };

    case SET_CALENDAR_VIEW_MODE:
      return {
        ...state,
        viewMode: action.payload,
      };
    case SET_CALENDAR_DATE_RANGE:
      return {
        ...state,
        dateRange: action.payload,
      };

    default:
      return state;
  }
}
