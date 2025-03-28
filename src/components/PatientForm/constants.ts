import { CommonSelectEnum, PatientFormValues, SelectOption } from './types';

export const DOCUMENT_TYPES_OPTIONS: SelectOption[] = [
  {
    label: 'Посвідчення особи, що потребує захисту',
    value: 'protection_certificate',
  },
  {
    label: 'Паспорт (ID-карта)',
    value: 'passport_id',
  },
  {
    label: 'Паспорт (книжечка)',
    value: 'passport_book',
  },
  {
    label: 'Посвідка на постійне проживання в Україні',
    value: 'permanent_residence_permit',
  },
  {
    label: 'Посвідка біженця',
    value: 'refugee_certificate',
  },
  {
    label: 'Посвідка на проживання',
    value: 'residence_permit',
  },
  {
    label: 'Тимчасове посвідчення громадянина України',
    value: 'temporary_certificate_ua',
  },
];

export const PREFERABLE_CONNECT_TYPE_OPTIONS: SelectOption[] = [
  {
    label: 'Електронною поштою',
    value: 'email',
  },
  {
    label: 'Телефоном',
    value: 'phone',
  },
];

export const GENDER_OPTIONS: SelectOption[] = [
  {
    label: 'жіноча',
    value: 'female',
  },
  {
    label: 'чоловіча',
    value: 'male',
  },
];

export const INITIAL_PATIENT_FORM_VALUES: PatientFormValues = {
  lastName: null,
  firstName: null,
  birthCountry: null,
  middleName: null,
  phone: null,
  taxId: null,
  gender: CommonSelectEnum.UNSET,
  birthPlace: null,
  preferredContact: CommonSelectEnum.UNSET,
  secretWord: null,
  email: null,
  documentType: CommonSelectEnum.UNSET,
  documentNumber: null,
  issueDate: null,
  expiryDate: null,
  unzr: null,
  issuedBy: null,
  birthDate: null,
};

