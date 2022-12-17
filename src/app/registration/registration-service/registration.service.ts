import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

/**
 * Felhasználó service.
 */
@Injectable({ providedIn: 'root' })
export class RegistrationService {
  constructor(private httpClient: HttpClient) {}
  /**
   * Felhasználói adatok lekérése szerkesztésre (admin által)
   */
  public postEmailValidation(
    emailAddress: AbstractControl<any>
  ): Observable<any> {
    return this.httpClient.post('backendUrl', emailAddress);
  }
}
