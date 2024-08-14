/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, Slice } from '@reduxjs/toolkit';
import dayjs, { Dayjs } from 'dayjs';

import { ICalendar, IEvent } from '../interfaces/components.interface';

const initialValue: ICalendar = {
  monthIndex: dayjs().month(),
  daySelected: dayjs(),
  showEventModal: false,
  showDisplayModal: false,
  displayDetails: {} as IEvent,
  eventsList: []
};

const calendarSlice: Slice = createSlice({
  name: 'calendar',
  initialState: initialValue,
  reducers: {
    getMonthIndex: (state, _action) => {
      return state?.monthIndex;
    },
    handleMonthSelected: (state, action) => {
      return { ...state, monthIndex: action.payload };
    },
    handlePrevMonth: (state, _action) => {
      return { ...state, monthIndex: state.monthIndex - 1 };
    },
    handleNextMonth: (state, _action) => {
      return { ...state, monthIndex: state.monthIndex + 1 };
    },
    handleReset: (state, _action) => {
      return { ...state, monthIndex: dayjs().month() };
    },
    getDateSelected: (state, _action) => {
      return state.daySelected;
    },
    handleDateSelected: (state, action) => {
      return { ...state, daySelected: action.payload as unknown as Dayjs };
    },
    handleShowEventModal: (state, _action) => {
      return { ...state, showEventModal: true };
    },
    handleDisableEventModal: (state, _action) => {
      return { ...state, showEventModal: false };
    },
    addEventList: (state, action) => {
      return { ...state, eventsList: action.payload as IEvent[] };
    },
    handleDisableDisplayEventModal: (state, _action) => {
      return { ...state, showDisplayModal: false };
    },
    handleEnableDisplayEventModal: (state, _action) => {
      return { ...state, showDisplayModal: true };
    },
    handleDisplayDetails: (state, action) => {
      return { ...state, displayDetails: action.payload as IEvent };
    }
  }
});

export const {
  getMonthIndex,
  handleDisableEventModal,
  handlePrevMonth,
  handleNextMonth,
  handleReset,
  getDateSelected,
  handleDateSelected,
  handleMonthSelected,
  handleShowEventModal,
  handleDisableDisplayEventModal,
  handleEnableDisplayEventModal,
  handleDisplayDetails,
  addEventList
} = calendarSlice.actions;
export default calendarSlice.reducer;
