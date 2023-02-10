import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import {
  ActionCallback,
  Environment,
  Page,
  PaymentCreationDTO,
  PaymentDTO,
  PAYMENT_ACTIONS,
} from '../../shared/';

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

  getPayments = (): Observable<PaymentDTO[]> => {
    const url = this.API_URL + this.PATH;
    return this.http
      .get<Page<PaymentDTO>>(url)
      .pipe(map((result: Page<PaymentDTO>) => result.content), shareReplay(1));
  }

  getActionCallback(action?: PAYMENT_ACTIONS) : ActionCallback<PaymentDTO> {
    switch(action){
      case 'DELETE':
        return this.deletePayment
      case 'MARK_AS_PAID':
        return this.marksAsPaid
      default:
        return this.createPayment
    }
  }

  createPayment = (payment: PaymentCreationDTO): Observable<PaymentDTO>  =>{
    const url = this.API_URL + this.PATH;
    return this.http.post<PaymentDTO>(url, payment);
  }

  marksAsPaid = (payment: PaymentDTO) => {
    const url = this.API_URL + this.PATH + `${payment.id}` + '/paid';
    return this.http.patch<void>(url, null);
  }

  deletePayment = (payment: PaymentDTO) => {
    const url = this.API_URL + this.PATH + `${payment.id}`;
    return this.http.delete<void>(url);
  }
}
