import dayjs, { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip } from 'react-tooltip';
import { getMonth } from 'src/shared/utils/utility-functions';
import { v4 as uuid } from 'uuid';

import { Istate } from '../interfaces/components.interface';
import { handleDateSelected, handleNextMonth, handlePrevMonth } from '../reducers/calender.reducer';

const SmallCalendar = () => {
  const dispatch = useDispatch();
  const monthIndex = useSelector((state: Istate) => state?.calendar?.monthIndex);
  const daySelected = useSelector((state: Istate) => state?.calendar?.daySelected);
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  function getDayClass(day: Dayjs) {
    const format = 'DD-MM-YY';
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);
    if (nowDay === currDay) {
      return 'bg-blue-500 rounded-full text-white';
    } else if (currDay === slcDay) {
      return 'bg-blue-100 rounded-full text-blue-600 font-bold';
    } else {
      return '';
    }
  }

  return (
    <div className="mt-9">
      <header className="flex items-center justify-between">
        <p data-tooltip-id="tooltip-1" className="w-[100px] overflow-hidden truncate whitespace-nowrap font-bold text-gray-500">
          {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
        </p>
        <Tooltip id="tooltip-1" place="bottom" content={dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')} />
        <div>
          <button onClick={() => dispatch(handlePrevMonth(''))} className="mx-2 rounded-full p-2 hover:bg-blue-200">
            <FaAngleLeft />
          </button>
          <button onClick={() => dispatch(handleNextMonth(''))} className="mx-2 rounded-full p-2 hover:bg-blue-200">
            <FaAngleRight />
          </button>
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day) => (
          <span key={uuid()} className="py-1 text-center text-sm">
            {day.format('dd').charAt(0)}
          </span>
        ))}
        {currentMonth.map((row) => (
          <React.Fragment key={uuid()}>
            {row.map((day: Dayjs) => (
              <button
                key={uuid()}
                onClick={() => {
                  dispatch(handleDateSelected(day));
                }}
                className={`w-full py-1 ${getDayClass(day)}`}
              >
                <span className="text-sm">{day.format('D')}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SmallCalendar;
