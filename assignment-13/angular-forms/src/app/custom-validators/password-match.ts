import { ValidatorFn, AbstractControl } from '@angular/forms';

export const validatePasswordMatch: ValidatorFn = (
  control: AbstractControl
): { [key: string]: any } | null => {
  let password = control.get('password')?.value;
  let confirmpassword = control.get('confirmPassword')?.value;
  console.log(password);
  if (!password || !confirmpassword || password !== confirmpassword) {
    return { matchError: true };
  }

  return null;
};
