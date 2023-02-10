import { Component, inject } from '@angular/core';
import { PaymentService } from '../../core/';

@Component({
  selector: 'nx-prommt-payment',
  template: `
    <ng-container *transloco="let t">
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            {{ t('PAYMENT_LIST') }}
          </a>
        </div>
      </nav>
      <view-payments-table *ngIf="payments$ | async as payments" [payments]="payments"></view-payments-table>
    </ng-container>
  `,
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  // New angular v15 inject feature demonstration.
  payments$ = inject(PaymentService).getPayments();
}
