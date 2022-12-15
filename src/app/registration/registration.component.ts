import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  public registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: [null],
      email: [null],
      password: [null],
      rePassword: [null],
      userType: [null]
    });
  }
}
