import dayjs, { Dayjs } from 'dayjs';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { IEvent, Istate } from '../interfaces/components.interface';
import {
  handleDateSelected,
  handleDisplayDetails,
  handleEnableDisplayEventModal,
  handleShowEventModal
} from '../reducers/calender.reducer';

const Day = ({ day, rowIdx }: { day: Dayjs; rowIdx: number }): React.ReactElement => {
  const dispatch = useDispatch();
  function getCurrentDayClass() {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'bg-blue-600 text-white rounded-full w-7' : '';
  }
  const eventList = useSelector((state: Istate) => state?.calendar?.eventsList);
  const filteredList = useMemo(() => {
    return eventList.filter((event: IEvent) => {
      return dayjs(event.date).format('YYYY-MM-DD') === day.format('YYYY-MM-DD');
    });
  }, [eventList, day]);

  return (
    <div className="flex flex-col border border-gray-200">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && <p className="mt-1 text-sm">{day.format('ddd').toUpperCase()}</p>}
        <p className={`my-1 p-1 text-center text-sm ${getCurrentDayClass()}`}>{day.format('DD')}</p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          dispatch(handleShowEventModal(''));
          dispatch(handleDateSelected(day));
        }}
      >
        {filteredList.map((evt: IEvent) => (
          <div
            key={uuid()}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(handleDisplayDetails(evt));
              dispatch(handleDateSelected(dayjs(evt.date)));
              dispatch(handleEnableDisplayEventModal(''));
            }}
            className={'mb-1 mr-3 truncate rounded bg-blue-200 p-1 text-sm text-gray-600'}
          >
            {evt.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day;
