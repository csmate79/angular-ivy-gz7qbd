import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  public postSendEmailToFriend(
    emailAddress: AbstractControl<any>
  ): Observable<any> {
    return this.httpClient.post(
      'https://formspree.io/f/xjvdbgvy',
      {
        name: 'Valaki',
        replyto: emailAddress.value,
        message: 'ez egy új email',
      },
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    );
  }
}
