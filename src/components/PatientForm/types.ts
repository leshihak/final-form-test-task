export interface PatientFormValues {
  lastName: string | null;
  firstName: string | null;
  middleName: string | null;
  birthCountry: string | null;
  birthDate: string | null;
  birthPlace: string | null;
  phone: string | null;
  taxId: string | null;
  gender: GenderTypes;
  preferredContact: PreferredContactTypes;
  secretWord: string | null;
  email: string | null;
  documentType: DocumentTypes;
  documentNumber: string | null;
  issueDate: string | null;
  expiryDate: string | null;
  unzr: string | null;
  issuedBy: string | null;
}

export interface SelectOption {
  label: string;
  value: string;
}

export type DocumentTypes =
  | CommonSelectEnum.UNSET
  | DocumentTypesEnum.PROTECTION_CERTIFICATE
  | DocumentTypesEnum.PASSPORT_BOOK
  | DocumentTypesEnum.PASSPORT_ID
  | DocumentTypesEnum.PERMANENT_RESIDENCE_PERMIT
  | DocumentTypesEnum.REFUGEE_CERTIFICATE
  | DocumentTypesEnum.RESIDENCE_PERMIT
  | DocumentTypesEnum.TEMPORARY_CERTIFICATE_UA;

export type PreferredContactTypes =
  | CommonSelectEnum.UNSET
  | PreferredContactTypesEnum.EMAIL
  | PreferredContactTypesEnum.PHONE;

export type GenderTypes =
  | CommonSelectEnum.UNSET
  | GenderTypesEnum.MALE
  | GenderTypesEnum.FEMALE;

export enum CommonSelectEnum {
  UNSET = 'unset',
}

export enum DocumentTypesEnum {
  PROTECTION_CERTIFICATE = 'protection_certificate',
  PASSPORT_ID = 'passport_id',
  PASSPORT_BOOK = 'passport_book',
  PERMANENT_RESIDENCE_PERMIT = 'permanent_residence_permit',
  REFUGEE_CERTIFICATE = 'refugee_certificate',
  RESIDENCE_PERMIT = 'residence_permit',
  TEMPORARY_CERTIFICATE_UA = 'temporary_certificate_ua',
}

export enum GenderTypesEnum {
  MALE = 'male',
  FEMALE = 'female',
}

export enum PreferredContactTypesEnum {
  EMAIL = 'email',
  PHONE = 'phone',
}

export interface PersonalDataSectionProps {
  hasMiddleName: boolean;
  hasTaxId: boolean;
  onSetHasTaxId: () => void;
  onSetHasMiddleName: () => void;
}
