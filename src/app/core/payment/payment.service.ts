import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  Environment,
  MutablePayment,
  Page,
  PaymentCreationDTO,
  PaymentDTO,
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

  getPayments(): Observable<PaymentDTO[]> {
    const url = this.API_URL + this.PATH;
    return this.http
      .get<Page<PaymentDTO>>(url)
      .pipe(map((result: Page<PaymentDTO>) => result.content));
  }

  createPayment(payment: PaymentCreationDTO): Observable<PaymentDTO> {
    const url = this.API_URL + this.PATH;
    return this.http.post<PaymentDTO>(url, payment);
  }

  private marksAsPaid(uuid: string) {
    const url = this.API_URL + this.PATH + `${uuid}` + '/paid';
    return this.http.patch<void>(url, null);
  }


  performAction(mPayment: MutablePayment<PaymentDTO>){
    if(mPayment.action === 'DELETE'){
      return this.deletePayment(mPayment.payment.id)
    }
    return this.marksAsPaid(mPayment.payment.id)
  }

  private deletePayment(uuid: string) {
    const url = this.API_URL + this.PATH + `${uuid}`;
    return this.http.delete<void>(url);
  }

}
