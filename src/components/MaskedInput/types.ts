import { HTMLAttributes, ChangeEventHandler, FocusEventHandler } from 'react';

interface InputBaseComponentProps extends HTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  value?: string;
  name?: string;
}

export interface MaskedInputProps extends InputBaseComponentProps {
  mask?: string;
}
