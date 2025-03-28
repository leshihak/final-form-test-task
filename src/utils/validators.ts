import { CommonSelectEnum } from '@/components/PatientForm/types';
import { REQUIRED_ERROR } from '@/constants/field-errors';

export const isRequired = <T>(value: T): string | undefined =>
  !value ? REQUIRED_ERROR : undefined;

export const hasMinLength = (min: number) => (value: string | null) =>
  !value
    ? REQUIRED_ERROR
    : value.length < min
    ? `Має містити щонайменше ${min} символів`
    : undefined;

export const isUnset = <T>(value: T) =>
  value === CommonSelectEnum.UNSET ? REQUIRED_ERROR : undefined;

export const matchesRegex =
  (regex: RegExp, error: string) => (value: string | null) =>
    value && !regex.test(value) ? error : undefined;
