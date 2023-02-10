import { Component, inject, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter, Subscription, switchMap } from 'rxjs';
import { PaymentService } from '../../core/';
import { PaymentCreationDTO } from '../../shared';
import { AddEditComponent } from './add-edit-payment/add-edit.component';

@Component({
  selector: 'nx-prommt-payment',
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

  open() {
    const modalRef = this.modalService.open(AddEditComponent);

    this.subs.add(
      modalRef.closed
        .pipe(
          filter(Boolean),
          switchMap((res: PaymentCreationDTO) =>
            this.paymentService
              .createPayment(res)
              .pipe(
                switchMap(
                  () => (this.payments$ = this.paymentService.getPayments())
                )
              )
          )
        )
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
