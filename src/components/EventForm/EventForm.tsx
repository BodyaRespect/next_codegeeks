// src/components/EventForm/EventForm.tsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { EventFormValues } from '../../types/EventFormValues';
import styles from './EventFormStyles.module.css';

const EventForm: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<EventFormValues>({
    defaultValues: {
      title: '',
      date: '',
      location: '',
      category: '',
      description: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = (data: EventFormValues) => {
    // Handle form submission logic here
    console.log('Form data:', data);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Event Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formField}>
          <Controller
            name="title"
            control={control}
            rules={{ required: 'Title is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Title"
                variant="outlined"
                fullWidth
                error={!!errors.title}
                helperText={errors.title?.message}
              />
            )}
          />
        </div>
        <div className={styles.formField}>
          <Controller
            name="date"
            control={control}
            rules={{ required: 'Date is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Date (yyyy-MM-dd)"
                variant="outlined"
                fullWidth
                error={!!errors.date}
                helperText={errors.date?.message}
              />
            )}
          />
        </div>
        <div className={styles.formField}>
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
              />
            )}
          />
        </div>
        <div className={styles.formField}>
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
              />
            )}
          />
        </div>
        <div className={styles.formField}>
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
              />
            )}
          />
        </div>
        <Button type="submit" variant="contained" color="primary" className={styles.submitButton}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default EventForm;
