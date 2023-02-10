import { Component, inject, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter, Observable, Subscription, switchMap } from 'rxjs';
import { PaymentService } from '../../core/';
import { ActionCallback, MutablePayment, PaymentAction, PaymentDTO, PAYMENT_ACTIONS } from '../../shared';
import { PaymentModalActionsComponent } from './modal-actions/modal-actions.component';

@Component({
  selector: 'payments-main',
  template: `
    <ng-container *transloco="let t">
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            {{ t('PAYMENT_LIST') }}
          </a>
          <div>
            <button type="button" class="btn btn-primary me-4" (click)="open()">
              {{ t('CREATE') }}
            </button>
          </div>
        </div>
      </nav>
      <view-payments-table
        *ngIf="payments$ | async as payments"
        [payments]="payments"
        (action)="open($event)"
      ></view-payments-table>
    </ng-container>
  `,
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnDestroy {
  payments$ = this.paymentService.getPayments();

  // New angular v15 inject feature demonstration.
  modalService = inject(NgbModal);

  private subs = new Subscription();

  constructor(private paymentService: PaymentService) {}

  open(payment?: MutablePayment<PaymentDTO>) {
    const modalRef = this.modalService.open(PaymentModalActionsComponent);
    const paymentAction: PaymentAction<PaymentDTO> = {
      payment: payment?.payment,
      action: payment?.action || 'CREATE',
      actionCallback: this.paymentService.getActionCallback(payment?.action)
    }
    modalRef.componentInstance.paymentAction = paymentAction

    this.subs.add(
      modalRef.closed
        .pipe(
          filter((paymentAction: PaymentAction<PaymentDTO>) =>  paymentAction.payment !== undefined),
          switchMap((paymentAction: PaymentAction<PaymentDTO>) => paymentAction.actionCallback(paymentAction.payment as PaymentDTO)),
          switchMap(() => (this.payments$ = this.paymentService.getPayments()))
        )
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
