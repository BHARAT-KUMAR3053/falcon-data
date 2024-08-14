import './components.scss';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { IoMdClose } from 'react-icons/io';
import { MdDragHandle } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { showErrorToast, showSuccessToast } from 'src/shared/utils/utility-functions';

import { FormValues, Istate } from '../interfaces/components.interface';
import { handleDisableEventModal } from '../reducers/calender.reducer';
import { eventValidationSchema } from '../schemes/components.schemes';
import { useCreateListMutation } from '../services/calendar.service';

const EventModal = (): React.ReactElement => {
  const dispatch = useDispatch();
  const daySelected = useSelector((state: Istate) => state?.calendar?.daySelected);
  const [createList, { isLoading }] = useCreateListMutation();

  const handleSubmit = async (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    try {
      await createList(values);
      showSuccessToast('event submitted successfully');
    } catch (error) {
      showErrorToast('Error submitting form');
    } finally {
      setSubmitting(false);
      dispatch(handleDisableEventModal(''));
    }
  };
  return (
    <div className="fixed left-0 top-0 flex h-screen w-full items-center justify-center">
      <Formik
        initialValues={{
          name: '',
          phoneNumber: '',
          email: '',
          description: '',
          date: new Date(daySelected.format('YYYY-MM-DD'))
        }}
        validationSchema={eventValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, resetForm }) => (
          <Form className="flex w-1/4 flex-col items-center justify-center rounded-lg bg-white shadow-2xl" autoComplete="off">
            <header className="flex w-full items-center justify-between bg-gray-100 px-4 py-2">
              <MdDragHandle />
              <div className="flex gap-4">
                {/* <button className="rounded-full p-2 hover:bg-blue-200">
                  <MdDelete />
                </button> */}
                <button
                  className="rounded-full p-2 hover:bg-blue-200"
                  onClick={() => {
                    resetForm();
                    dispatch(handleDisableEventModal(''));
                  }}
                >
                  <IoMdClose />
                </button>
              </div>
            </header>
            <div>{`creating event for date ${daySelected.format('DD MMMM YYYY')}`}</div>

            <div className="input-group m-2 flex flex-col items-center justify-center">
              <label htmlFor="name" className="label mr-auto flex">
                Name
              </label>
              <Field type="text" id="name" name="name" className="input" />
              <ErrorMessage name="name" component="div" className="max-w-[190px] break-words text-red-500" />
            </div>

            <div className="input-group m-2 flex flex-col items-center justify-center">
              <label htmlFor="phoneNumber" className="label mr-auto flex">
                Phone Number
              </label>
              <Field type="text" id="phoneNumber" name="phoneNumber" className="input" />
              <ErrorMessage name="phoneNumber" component="div" className="max-w-[190px] break-words text-red-500" />
            </div>

            <div className="input-group m-2 flex flex-col items-center justify-center">
              <label htmlFor="email" className="label mr-auto flex">
                Email
              </label>
              <Field type="email" id="email" name="email" className="input" />
              <ErrorMessage name="email" component="div" className="max-w-[190px] break-words text-red-500" />
            </div>

            <div className="input-group m-2 flex flex-col items-center justify-center">
              <label htmlFor="email" className="label mr-auto flex">
                Description
              </label>
              <Field type="text" id="description" name="description" className="input" />
              <ErrorMessage name="description" component="div" className="max-w-[190px] break-words text-red-500" />
            </div>

            <button type="submit" disabled={isSubmitting} className="m-5 rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600">
              {isLoading ? 'loading...' : 'Save'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EventModal;
