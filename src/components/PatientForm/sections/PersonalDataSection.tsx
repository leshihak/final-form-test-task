import { Typography, Grid, TextField, Switch } from '@mui/material';
import { FC } from 'react';
import { Field } from 'react-final-form';

import { GENDER_OPTIONS } from '../constants';
import { CommonSelectEnum, PersonalDataSectionProps } from '../types';

export const PersonalDataSection: FC<PersonalDataSectionProps> = ({
  hasMiddleName,
  hasTaxId,
  onSetHasTaxId,
  onSetHasMiddleName,
}) => (
  <>
    <Typography variant="h6" gutterBottom>
      Дані пацієнта
    </Typography>

    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Field name="lastName">
          {({ input, meta }) => (
            <TextField
              {...input}
              label="Прізвище"
              required
              fullWidth
              variant="standard"
              InputLabelProps={{ shrink: true }}
              error={meta.touched && Boolean(meta.error)}
              helperText={meta.touched && meta.error}
            />
          )}
        </Field>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Field name="firstName">
          {({ input, meta }) => (
            <TextField
              {...input}
              label="Ім'я"
              required
              fullWidth
              variant="standard"
              InputLabelProps={{ shrink: true }}
              error={meta.touched && Boolean(meta.error)}
              helperText={meta.touched && meta.error}
            />
          )}
        </Field>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Field name="middleName">
          {({ input, meta }) => (
            <TextField
              {...input}
              label="По батькові"
              value={!hasMiddleName ? 'Немає по батькові' : input.value}
              fullWidth
              variant="standard"
              required={hasMiddleName}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                disabled: !hasMiddleName,
                endAdornment: (
                  <Switch
                    checked={hasMiddleName}
                    onChange={onSetHasMiddleName}
                    size="small"
                  />
                ),
              }}
              error={meta.touched && Boolean(meta.error)}
              helperText={
                !hasMiddleName
                  ? 'Немає по батькові згідно документів'
                  : meta.touched && meta.error
              }
            />
          )}
        </Field>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Field name="taxId">
          {({ input, meta }) => (
            <TextField
              {...input}
              label="РНОКПП (ІПН)"
              value={!hasTaxId ? 'Немає РНОКПП (ІПН)' : input.value}
              fullWidth
              variant="standard"
              required={hasTaxId}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                disabled: !hasTaxId,
                endAdornment: (
                  <Switch
                    checked={hasTaxId}
                    onChange={onSetHasTaxId}
                    size="small"
                  />
                ),
              }}
              error={meta.touched && Boolean(meta.error)}
              helperText={
                !hasTaxId
                  ? 'Немає ІПН за віком чи має відмітку у паспорті'
                  : meta.touched && meta.error
              }
            />
          )}
        </Field>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Field name="birthDate">
          {({ input, meta }) => (
            <TextField
              {...input}
              label="Дата народження"
              required
              fullWidth
              variant="standard"
              type="date"
              InputLabelProps={{ shrink: true }}
              error={meta.touched && Boolean(meta.error)}
              helperText={meta.touched && meta.error}
            />
          )}
        </Field>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Field name="gender">
          {({ input, meta }) => (
            <TextField
              {...input}
              select
              label="Стать"
              required
              fullWidth
              variant="standard"
              SelectProps={{ native: true }}
              InputLabelProps={{ shrink: true }}
              error={meta.touched && Boolean(meta.error)}
              helperText={meta.touched && meta.error}
            >
              <option value={CommonSelectEnum.UNSET}>-- Вибрати --</option>

              {GENDER_OPTIONS.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </TextField>
          )}
        </Field>
      </Grid>
    </Grid>
  </>
);
