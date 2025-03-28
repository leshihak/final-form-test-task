import { ChangeEvent, forwardRef } from 'react';
import { IMaskInput } from 'react-imask';

import { MaskedInputProps } from './types';

export const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ mask, onChange, name, value, ...rest }, ref) => (
    <IMaskInput
      {...rest}
      mask={mask}
      lazy={true}
      overwrite
      inputRef={ref}
      value={value}
      onAccept={(value: string) => {
        if (onChange && name) {
          const event = {
            target: { name, value },
          } as ChangeEvent<HTMLInputElement>;

          onChange(event);
        }
      }}
    />
  )
);
