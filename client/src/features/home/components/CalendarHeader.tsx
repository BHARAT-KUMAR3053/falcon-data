import dayjs from 'dayjs';
import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { Istate } from '../interfaces/components.interface';
import { handleNextMonth, handlePrevMonth, handleReset } from '../reducers/calender.reducer';

const CalendarHeader = (): React.ReactElement => {
  const monthIndex = useSelector((state: Istate) => state?.calendar?.monthIndex);
  const dispatch = useDispatch();
  return (
    <header className="flex items-center px-4 py-2">
      <h1 className="fond-bold mr-10 text-xl text-gray-500">Doctor's Calendar</h1>
      <button onClick={() => dispatch(handleReset(''))} className="mr-5 rounded border px-4 py-2 hover:bg-blue-200">
        Today
      </button>
      <button onClick={() => dispatch(handlePrevMonth(''))} className="mx-2 rounded-full p-2 hover:bg-blue-200">
        <FaAngleLeft />
      </button>
      <button onClick={() => dispatch(handleNextMonth(''))} className="mx-2 rounded-full p-2 hover:bg-blue-200">
        <FaAngleRight />
      </button>
      <h2 className="ml-4 text-xl font-bold text-gray-500">{dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}</h2>
    </header>
  );
};

export default CalendarHeader;
