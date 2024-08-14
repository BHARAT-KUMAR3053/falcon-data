import * as Yup from 'yup';

export const eventValidationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  phoneNumber: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  description: Yup.string().required('Description is required')
});
