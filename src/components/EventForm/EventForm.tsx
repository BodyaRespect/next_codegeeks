"use client";

import React, { useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Snackbar, Alert } from '@mui/material';
import { useRouter } from 'next/navigation';
import DatePicker from 'react-datepicker';
import { EventFormValues } from '../../types/EventFormValues';
import styles from './EventFormStyles.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parseISO, isValid } from 'date-fns';

interface EventFormProps {
  onSubmit: (data: EventFormValues) => void;
  initialData?: EventFormValues;
}

export const EventForm: React.FC<EventFormProps> = ({ onSubmit, initialData }) => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<EventFormValues>({
    defaultValues: initialData || {
      name: '',
      date: new Date().toISOString(),
      location: '',
      category: '',
      description: '',
      price: undefined,
    },
    mode: 'onBlur',
  });

  const [openSnackbar, setOpenSnackbar] = React.useState<boolean>(false);
  const router = useRouter();

  const handleFormSubmit = useCallback(async (data: EventFormValues) => {
    const transformedData = {
      ...data,
      price: data.price !== undefined ? Math.max(0, data.price) : 0,
    };

    try {
      await onSubmit(transformedData);
      setOpenSnackbar(true);
      reset();
      setTimeout(() => router.push('/events'), 2000);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  }, [onSubmit, reset, router]);

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Event Form</h2>

      <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
        <Controller
          name="name"
          control={control}
          rules={{ required: 'Title is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Title"
              variant="outlined"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
              margin="normal"
            />
          )}
        />

        <Controller
          name="date"
          control={control}
          rules={{ required: 'Date and time are required' }}
          render={({ field }) => (
            <DatePicker
                selected={field.value ? parseISO(field.value) : new Date()}
                onChange={(date) => field.onChange(date ? date.toISOString() : '')}
                showTimeSelect
                dateFormat="Pp"
                placeholderText="Select date and time"
                customInput={<TextField variant="outlined" fullWidth margin="normal" />}
                isClearable
              />
          )}
        />

        <Controller
          name="location"
          control={control}
          rules={{ required: 'Location is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Location"
              variant="outlined"
              fullWidth
              error={!!errors.location}
              helperText={errors.location?.message}
              margin="normal"
            />
          )}
        />

        <Controller
          name="category"
          control={control}
          rules={{ required: 'Category is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Category"
              variant="outlined"
              fullWidth
              error={!!errors.category}
              helperText={errors.category?.message}
              margin="normal"
            />
          )}
        />

        <Controller
          name="description"
          control={control}
          rules={{ required: 'Description is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              error={!!errors.description}
              helperText={errors.description?.message}
              margin="normal"
            />
          )}
        />

        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Price (Optional)"
              variant="outlined"
              fullWidth
              type="number"
              InputProps={{ startAdornment: '$' }}
              error={!!errors.price}
              helperText={errors.price?.message}
              margin="normal"
              onInput={(e) => {
                const value = (e.target as HTMLInputElement).value;
                if (+value < 0) {
                  (e.target as HTMLInputElement).value = '0';
                }
              }}
            />
          )}
        />

        <Button type="submit" variant="contained" color="primary" className={styles.submitButton}>
          Send
        </Button>
      </form>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Form sent successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};
