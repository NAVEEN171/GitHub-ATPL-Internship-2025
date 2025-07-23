import { ValidatorFn, AbstractControl } from '@angular/forms';

export const ValidateZipCode: ValidatorFn = (
  control: AbstractControl
): { [key: string]: any } | null => {
  if (control.value) {
    let val: string = control.value.toString().trim();

    if (val.length < 6 || val.length > 6) {
      return { minError: true };
    }
  }
  if (!control.value) {
    return { minError: true };
  }
  return null;
};
