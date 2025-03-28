import { REQUIRED_ERROR } from '@/constants/field-errors';
import {
  isRequired,
  hasMinLength,
  isUnset,
  matchesRegex,
} from '@/utils/validators';
import { PatientFormValues, DocumentTypesEnum } from './types';

export const validateValues = (
  values: PatientFormValues,
  hasMiddleName: boolean,
  hasTaxId: boolean
) => {
  const errors: Partial<Record<keyof PatientFormValues, string>> = {};

  const validators = {
    lastName: isRequired,
    firstName: isRequired,
    birthCountry: isRequired,
    birthDate: isRequired,
    birthPlace: isRequired,
    secretWord: hasMinLength(6),
    documentType: isUnset,
    gender: isUnset,
    preferredContact: isUnset,
    documentNumber: (
      value: string | null,
      values: Partial<PatientFormValues>
    ) => {
      if (!value) return REQUIRED_ERROR;

      return values.documentType === DocumentTypesEnum.PASSPORT_BOOK
        ? matchesRegex(
            /^[А-ЯІЇЄ]{2}\d{6}$/,
            'Номер введено некоректно. Формат: 2 літери та 6 цифр (наприклад, АБ123456)'
          )(value)
        : matchesRegex(
            /^\d{9}$/,
            'Номер введено некоректно, поле повинно містити 9 цифр'
          )(value);
    },
    phone: matchesRegex(
      /^\+38\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/,
      'Некоректний номер телефона. Приклад: +38 (093) 999-88-77'
    ),
    email: matchesRegex(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      'Некоректний формат email'
    ),
    issueDate: isRequired,
    issuedBy: isRequired,
  };

  Object.entries(validators).forEach(([field, validator]) => {
    const key = field as keyof PatientFormValues;
    const error = validator?.(values[key], values);

    if (error) {
      errors[key] = error;
    }
  });

  if (hasTaxId && !values.taxId) {
    errors.taxId = REQUIRED_ERROR;
  }

  if (hasMiddleName && !values.middleName) {
    errors.middleName = REQUIRED_ERROR;
  }

  return errors;
};
