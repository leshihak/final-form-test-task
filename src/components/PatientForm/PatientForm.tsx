import { FC, useState } from 'react';
import { Form } from 'react-final-form';
import { Box, Button } from '@mui/material';

import { PersonalDataSection } from './sections/PersonalDataSection';
import { BirthInfoDataSection } from './sections/BirthInfoSection';
import { DocumentDataSection } from './sections/DocumentSection';

import { INITIAL_PATIENT_FORM_VALUES } from './constants';
import { PatientFormValues } from './types';
import { validateValues } from './validation';

export const PatientForm: FC = () => {
  const [hasTaxId, setHasTaxId] = useState(true);
  const [hasMiddleName, setHasMiddleName] = useState(true);
  const [submittedValues, setSubmittedValues] =
    useState<PatientFormValues | null>(null);

  const onSubmit = async (values: PatientFormValues) => {
    const processedValues = {
      ...values,
      middleName: hasMiddleName ? values.middleName : null,
      taxId: hasTaxId ? values.taxId : null,
    };

    setSubmittedValues(processedValues);
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={INITIAL_PATIENT_FORM_VALUES}
      validate={(values) => validateValues(values, hasMiddleName, hasTaxId)}
      render={({ handleSubmit, submitting, pristine, invalid }) => (
        <form onSubmit={handleSubmit} noValidate>
          <PersonalDataSection
            hasMiddleName={hasMiddleName}
            hasTaxId={hasTaxId}
            onSetHasTaxId={() => setHasTaxId((prevState) => !prevState)}
            onSetHasMiddleName={() =>
              setHasMiddleName((prevState) => !prevState)
            }
          />

          <BirthInfoDataSection />

          <DocumentDataSection />

          <Box mt={4} display="flex" justifyContent="flex-end">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={submitting || pristine || invalid}
            >
              Зберегти
            </Button>
          </Box>

          {submittedValues && (
            <pre>{JSON.stringify(submittedValues, null, 2)}</pre>
          )}
        </form>
      )}
    />
  );
};
