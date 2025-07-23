import { ValidatorFn, AbstractControl } from '@angular/forms';

export const ValidateZipCode: ValidatorFn = (
  control: AbstractControl
): {
  [key: string]: any;
} | null => {
  console.log(control);
  let val: string = control.value.toString().trim();
  console.log(val);
  if (val.length < 6) {
    return { minError: true };
  }
  return null;
};
