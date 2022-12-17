import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

/**
 * Felhasználó service.
 */
@Injectable({ providedIn: 'root' })
export class RegistrationService {
  constructor(private httpClient: HttpClient) {}

  public postEmailValidation(
    emailAddress: AbstractControl<any>
  ): Observable<any> {
    return this.httpClient.post('backendUrl/checkemail', emailAddress);
  }

  public postSendEmailToFriend(email: string): void {
    emailjs
      .send(
        'service_af1h51s',
        'template_uoaqmrr',
        {
          from_name: 'asd',
          reply_to: email,
        },
        'xGybd5wcyNAlE4PnF'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
