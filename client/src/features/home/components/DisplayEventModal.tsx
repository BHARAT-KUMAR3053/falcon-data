import dayjs from 'dayjs';
import { IoMdClose } from 'react-icons/io';
import { MdDragHandle } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import { Istate } from '../interfaces/components.interface';
import { handleDisableDisplayEventModal } from '../reducers/calender.reducer';

const DisplayEventModal = () => {
  const dispatch = useDispatch();
  const displayDetails = useSelector((state: Istate) => state?.calendar?.displayDetails);
  return (
    <div className="fixed left-0 top-0 flex h-screen w-full items-center justify-center">
      <div className="flex w-1/4 flex-col items-center justify-center rounded-lg bg-white shadow-2xl">
        <header className="flex w-full items-center justify-between bg-gray-100 px-4 py-2">
          <MdDragHandle />
          <div className="flex gap-4">
            {/* <button className="rounded-full p-2 hover:bg-blue-200">
              <MdDelete />
            </button> */}
            <button
              className="rounded-full p-2 hover:bg-blue-200"
              onClick={() => {
                dispatch(handleDisableDisplayEventModal(''));
              }}
            >
              <IoMdClose />
            </button>
          </div>
        </header>
        <div className="flex flex-col gap-2">
          <div>Name: {displayDetails.name}</div>
          <div>Description: {displayDetails.description}</div>
          <div>Email: {displayDetails.email}</div>
          <div>Phone Number: {displayDetails.phoneNumber}</div>
          <div>Date: {dayjs(displayDetails.date).format('DD MMMMM YYYY')}</div>
        </div>
      </div>
    </div>
  );
};

export default DisplayEventModal;
