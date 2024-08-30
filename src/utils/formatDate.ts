import { format, parseISO } from 'date-fns';

/**
 * Formats a date into a readable format.
 * @param date - Date in ISO format or a Date object.
 * @param dateFormat - The date format, e.g., 'dd/MM/yyyy'.
 * @returns - The formatted date as a string.
 */
export const formatDate = (date: string | Date, dateFormat: string = 'dd/MM/yyyy'): string => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  return format(parsedDate, dateFormat);
};
