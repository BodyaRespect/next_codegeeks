import { EventFormValues } from '@/types/EventFormValues';
import { isNotEmpty, isValidDate, isStringLengthValid } from '../../utils/validation';

export const validateEventForm = (values: EventFormValues) => {
  const errors: Partial<Record<keyof EventFormValues, string>> = {};

  if (!isNotEmpty(values.title)) {
    errors.title = 'Title is required';
  } else if (!isStringLengthValid(values.title, 3, 100)) {
    errors.title = 'Title must be between 3 and 100 characters long';
  }

  if (!isValidDate(values.date, 'yyyy-MM-dd')) {
    errors.date = 'Date is invalid or not in the correct format';
  }

  if (!isNotEmpty(values.location)) {
    errors.location = 'Location is required';
  } else if (!isStringLengthValid(values.location, 3, 100)) {
    errors.location = 'Location must be between 3 and 100 characters long';
  }

  if (!isNotEmpty(values.category)) {
    errors.category = 'Category is required';
  }

  if (!isNotEmpty(values.description)) {
    errors.description = 'Description is required';
  } else if (!isStringLengthValid(values.description, 10, 500)) {
    errors.description = 'Description must be between 10 and 500 characters long';
  }

  return errors;
};
