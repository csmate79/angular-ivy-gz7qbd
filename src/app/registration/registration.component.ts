import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdType } from './enums/ad.enum';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  public registrationForm: FormGroup;

  public AdTypeEnum = Object.keys(AdType);

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    console.log(this.AdTypeEnum);
    this.registrationForm = this.fb.group({
      name: [null, Validators.maxLength(75)],
      email: [null],
      password: [
        null,
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
          ),
        ],
      ],
      rePassword: [
        null,
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
          ),
        ],
      ],
      userType: [null],
      ads: [null],
      birthDate: [null],
      rules: [null],
    });
  }
}
