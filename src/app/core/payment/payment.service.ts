import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Environment, Page, PaymentDTO } from '../../shared/';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private readonly PATH = '/payments/';
  private API_URL = this.environment.base + this.environment.path;

  constructor(
    private http: HttpClient,
    @Inject('environment') private environment: Environment
  ) {}

  getPayments(): Observable<PaymentDTO[]> {
    const url = this.API_URL + this.PATH;
    return this.http
      .get<Page<PaymentDTO>>(url)
      .pipe(map((result: Page<PaymentDTO>) => result.content));
  }
}
