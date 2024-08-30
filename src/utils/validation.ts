import { parseISO, isValid, formatDate } from 'date-fns';

/**
 * Checks if a value is a non-empty string.
 * @param value - The value to check.
 * @returns - True if the value is a non-empty string, otherwise false.
 */
export const isNotEmpty = (value: string): boolean => {
  return typeof value === 'string' && value.trim().length > 0;
};

/**
 * Validates an email address format.
 * @param email - The email address to validate.
 * @returns - True if the email is valid, otherwise false.
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};

/**
 * Checks if a date is in the correct format and valid.
 * @param date - Date in ISO format or a Date object.
 * @param dateFormat - The expected date format, e.g., 'yyyy-MM-dd'.
 * @returns - True if the date is valid and correctly formatted, otherwise false.
 */
export const isValidDate = (date: string | Date, dateFormat: string = 'yyyy-MM-dd'): boolean => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;

  return isValid(parsedDate) && formatDate(parsedDate, dateFormat) === date;
};

/**
 * Validates that a value is a number and within a specified range.
 * @param value - The value to check.
 * @param min - Minimum acceptable value.
 * @param max - Maximum acceptable value.
 * @returns - True if the value is a number within the specified range, otherwise false.
 */
export const isNumberInRange = (value: any, min: number, max: number): boolean => {
  const numberValue = Number(value);

  return !isNaN(numberValue) && numberValue >= min && numberValue <= max;
};

/**
 * Checks if a string matches a specific length requirement.
 * @param value - The string to check.
 * @param minLength - Minimum length of the string.
 * @param maxLength - Maximum length of the string.
 * @returns - True if the string length is within the specified range, otherwise false.
 */
export const isStringLengthValid = (value: string, minLength: number, maxLength: number): boolean => {
  return typeof value === 'string' && value.length >= minLength && value.length <= maxLength;
};

/**
 * Validates if a value is a valid phone number.
 * @param phone - The phone number to validate.
 * @returns - True if the phone number is valid, otherwise false.
 */
export const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;

  return phoneRegex.test(phone);
};
