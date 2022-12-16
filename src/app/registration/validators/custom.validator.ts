import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  public static passwordMatch(
    controlName: string,
    matchControlName: string
  ): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const matchControl = controls.get(matchControlName);

      if (!matchControl?.errors && control?.value !== matchControl?.value) {
        matchControl?.setErrors({
          matching: {
            actualValue: matchControl?.value,
            requiredValue: control?.value,
          },
        });
        return { matching: true };
      }
      return null;
    };
  }

  public static ageValidator: ValidatorFn = (date): ValidationErrors => {
    let today = new Date();
    if (date.value) {
      if (today.getFullYear() - date.value.getFullYear() < 18) {
        return { underEighteen: true };
      } else {
        null;
      }
    }
  };
}
