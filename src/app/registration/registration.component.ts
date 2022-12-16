import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdTypeEnums } from './enums/ads.enum';
import { CustomValidators } from './validators/custom.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  public registrationForm: FormGroup;

  public AdTypeEnum = Object.keys(AdTypeEnums);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    console.log(this.AdTypeEnum);
    this.registrationForm = this.fb.group(
      {
        name: [null, Validators.maxLength(75)],
        email: [null, Validators.email],
        password: [
          null,
          [
            Validators.pattern(
              '(?=.*[A-Z])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
            ),
          ],
        ],
        passwordConfirm: [null],
        userType: [null],
        ads: [null],
        birthDate: [null],
        rules: [null],
      },
      {
        validators: [
          CustomValidators.passwordMatch('password', 'passwordConfirm'),
        ],
      }
    );
  }

  public asd() {
    console.log(this.registrationForm);
  }
}
