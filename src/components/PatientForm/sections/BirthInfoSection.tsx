import { Box, Grid, TextField } from '@mui/material';
import { FC } from 'react';
import { Field } from 'react-final-form';

import { MaskedInput } from '../../MaskedInput/MaskedInput';
import { PREFERABLE_CONNECT_TYPE_OPTIONS } from '../constants';
import { CommonSelectEnum } from '../types';

export const BirthInfoDataSection: FC = () => (
  <Box pt={6}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Field name="birthCountry">
          {({ input, meta }) => (
            <TextField
              {...input}
              label="Країна народження"
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

      <Grid item xs={12} sm={6}>
        <Field name="birthPlace">
          {({ input, meta }) => (
            <TextField
              {...input}
              label="Місце народження"
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

      <Grid item xs={12} sm={6}>
        <Field name="preferredContact">
          {({ input, meta }) => (
            <TextField
              {...input}
              select
              label="Бажаний спосіб зв’язку із пацієнтом"
              fullWidth
              variant="standard"
              SelectProps={{ native: true }}
              InputLabelProps={{ shrink: true }}
              error={meta.touched && Boolean(meta.error)}
              helperText={meta.touched && meta.error}
            >
              <option value={CommonSelectEnum.UNSET}>-- Вибрати --</option>

              {PREFERABLE_CONNECT_TYPE_OPTIONS.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </TextField>
          )}
        </Field>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Field name="secretWord">
          {({ input, meta }) => (
            <TextField
              {...input}
              label="Секретне слово (не менше 6 символів)"
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

      <Grid item xs={12} sm={6}>
        <Field name="phone">
          {({ input, meta }) => (
            <TextField
              label="Контактний номер телефону"
              fullWidth
              variant="standard"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                inputComponent: MaskedInput,
                inputProps: { ...input, mask: '+{38} (000) 000-00-00' },
              }}
              placeholder="+38 (___) ___-__-__"
              error={meta.touched && Boolean(meta.error)}
              helperText={meta.touched && meta.error}
            />
          )}
        </Field>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Field name="email">
          {({ input, meta }) => (
            <TextField
              {...input}
              label="Адреса електронної пошти"
              placeholder="example@example.com"
              fullWidth
              variant="standard"
              InputLabelProps={{ shrink: true }}
              error={meta.touched && Boolean(meta.error)}
              helperText={meta.touched && meta.error}
            />
          )}
        </Field>
      </Grid>
    </Grid>
  </Box>
);
