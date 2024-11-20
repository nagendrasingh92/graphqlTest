import * as Yup from 'yup';

export const employeeValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name should be at least 2 characters long')
    .max(50, 'Name should not exceed 50 characters'),
  employeeId: Yup.string()
    .required('Employee ID is required')
    .matches(/^\d+$/, 'Employee ID must be a number')
    .min(4, 'Employee ID should be at least 4 digits')
    .max(10, 'Employee ID should not exceed 10 digits'),
  jobRole: Yup.string()
    .required('Job Role is required')
    .min(2, 'Job Role should be at least 2 characters long')
    .max(50, 'Job Role should not exceed 50 characters'),
  salary: Yup.number()
    .required('Salary is required')
    .positive('Salary must be a positive number')
    .min(1000, 'Salary must be at least 1000')
    .max(1000000, 'Salary cannot exceed 1,000,000'),
});
