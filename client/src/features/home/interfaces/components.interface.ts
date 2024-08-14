import { Dayjs } from 'dayjs';

export type Day = Dayjs[];

export interface IEvent {
  name: string;
  email: string;
  phoneNumber: number;
  description: string;
  date: Date;
}

export interface ICalendar {
  monthIndex: number;
  daySelected: Dayjs;
  showEventModal: boolean;
  showDisplayModal: boolean;
  displayDetails: IEvent;
  eventsList: IEvent[];
}

export interface Istate {
  calendar: ICalendar;
}

export interface FormValues {
  name: string;
  phoneNumber: string;
  email: string;
  description: string;
  date: Date;
}

export type IMonth = Day[];
