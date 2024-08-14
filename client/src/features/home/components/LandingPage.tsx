import { FC, ReactElement, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMonth } from 'src/shared/utils/utility-functions';

import { Istate } from '../interfaces/components.interface';
import { addEventList } from '../reducers/calender.reducer';
import { useGetListQuery } from '../services/calendar.service';
import CalendarHeader from './CalendarHeader';
import DisplayEventModal from './DisplayEventModal';
import EventModal from './EventModal';
import Month from './Month';
import Sidebar from './Sidebar';

const LandingPage: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const monthIndex = useSelector((state: Istate) => state?.calendar?.monthIndex);
  const showEventModal = useSelector((state: Istate) => state?.calendar?.showEventModal);
  const showDisplayModal = useSelector((state: Istate) => state?.calendar?.showDisplayModal);
  const month = useMemo(() => {
    return getMonth(monthIndex);
  }, [monthIndex]);
  const firstDay = month && month[0][0];
  const lastDay = month && month[month.length - 1][6];
  const { data, isSuccess, isLoading } = useGetListQuery({ firstDay, lastDay });

  useEffect(() => {
    if (isSuccess && !isLoading) {
      dispatch(addEventList(data?.data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      {showEventModal && <EventModal />}
      {showDisplayModal && <DisplayEventModal />}

      {isLoading ? (
        <div>loading....</div>
      ) : (
        <div className="flex h-screen w-screen flex-col">
          <CalendarHeader />
          <div className="flex flex-1">
            <Sidebar />
            <Month month={month} />
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPage;
