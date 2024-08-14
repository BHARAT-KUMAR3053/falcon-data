import { useDispatch } from 'react-redux';

import plusImg from '../../../assets/plus.svg';
import { handleShowEventModal } from '../reducers/calender.reducer';

const CreateEventButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(handleShowEventModal(''))}
      className="flex items-center rounded-full border p-2 shadow-md hover:shadow-2xl"
    >
      <img src={plusImg} alt="create_event" className="h-7 w-7" />
      <span className="pl-3 pr-7"> Create</span>
    </button>
  );
};

export default CreateEventButton;
