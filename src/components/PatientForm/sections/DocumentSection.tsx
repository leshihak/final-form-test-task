import { Box, Typography, Grid, TextField } from '@mui/material';
import { FC } from 'react';
import { Field } from 'react-final-form';

import { MaskedInput } from '../../MaskedInput/MaskedInput';
import { DOCUMENT_TYPES_OPTIONS } from '../constants';
import { CommonSelectEnum } from '../types';

export const DocumentDataSection: FC = () => (
  <Box mt={6}>
    <Typography variant="h6" gutterBottom>
      Документ, що посвідчує особу
    </Typography>

    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Field name="documentType">
          {({ input, meta }) => (
            <TextField
              {...input}
              select
              label="Тип документа"
              required
              fullWidth
              variant="standard"
              SelectProps={{ native: true }}
              InputLabelProps={{ shrink: true }}
              error={meta.touched && Boolean(meta.error)}
              helperText={meta.touched && meta.error}
            >
              <option value={CommonSelectEnum.UNSET}>-- Вибрати --</option>

              {DOCUMENT_TYPES_OPTIONS.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </TextField>
          )}
        </Field>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Field name="documentNumber">
          {({ input, meta }) => (
            <TextField
              {...input}
              label="Серія (за наявності), номер"
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
        <Field name="issueDate">
          {({ input, meta }) => (
            <TextField
              {...input}
              label="Коли видано"
              placeholder="31.12.1971"
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

      <Grid item xs={12} sm={6}>
        <Field name="expiryDate">
          {({ input }) => (
            <TextField
              {...input}
              label="Діє до"
              placeholder="31.12.1971"
              fullWidth
              variant="standard"
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          )}
        </Field>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Field name="issuedBy">
          {({ input, meta }) => (
            <TextField
              {...input}
              label="Ким видано"
              required
              fullWidth
              variant="standard"
              multiline
              InputLabelProps={{ shrink: true }}
              error={meta.touched && Boolean(meta.error)}
              helperText={meta.touched && meta.error}
            />
          )}
        </Field>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Field name="unzr">
          {({ input }) => (
            <TextField
              label="Запис № (УНЗР)"
              fullWidth
              variant="standard"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                inputComponent: MaskedInput,
                inputProps: { ...input, mask: '00000000-00000' },
              }}
              helperText="Вкажіть унікальний номер запису в Демографічному реєстрі (Запис №)"
              placeholder="РРРРММДД-XXXXX"
            />
          )}
        </Field>
      </Grid>
    </Grid>
  </Box>
);
