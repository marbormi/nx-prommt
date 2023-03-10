import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CurrencyCode,
  PaymentAction,
  PaymentDTO,
  PAYMENT_ACTIONS,
} from '../../../shared';

export const CURRENCIES_CODES = [
  'AED',
  'AFN',
  'EUR',
  'GBP',
  'JPY',
  'KWD',
  'MAD',
  'MXN',
  'NZD',
  'RUB',
  'SAR',
  'SVC',
  'USD',
  'UYU',
  'VEF',
  'ZWD',
] as const;

@Component({
  selector: 'payment-modal-actions',
  template: `
    <ng-container *transloco="let t">
      <div class="modal-header">
        <h4 class="modal-title">
          {{ t(action) }}
        </h4>
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          (click)="activeModal.dismiss(false)"
        ></button>
      </div>
      <div class="modal-body">
        <form [formGroup]="createPaymentForm">
          <div class="mb-3">
            <label for="payerEmail" class="form-label">
              {{ t('PAYER_EMAIL') }} *
            </label>
            <input
              type="email"
              class="form-control"
              id="payerEmail"
              formControlName="payerEmail"
              [placeholder]="t('PAYER_EMAIL')"
            />
          </div>
          <div class="mb-3">
            <label for="currency" class="form-label">
              {{ t('CURRENCY') }} *
            </label>
            <select
              class="form-select"
              id="currency"
              formControlName="currency"
            >
              <ng-container *ngFor="let currency of currencies">
                <option [value]="currency">
                  {{ currency }}
                </option>
              </ng-container>
            </select>
          </div>
          <div class="mb-3">
            <label for="amount" class="form-label"> {{ t('AMOUNT') }} * </label>
            <input
              type="number"
              class="form-control"
              id="amount"
              formControlName="amount"
              [placeholder]="t('AMOUNT')"
            />
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-outline-dark"
          (click)="activeModal.close(false)"
        >
          {{ t('CLOSE') }}
        </button>

        <button
          class="btn"
          [ngClass]="{
            'btn-danger': action === 'DELETE',
            'btn-primary': action === 'CREATE',
            'btn-outline-primary': action === 'MARK_AS_PAID'
          }"
          type="submit"
          [disabled]="createPaymentForm.invalid"
          (click)="performAction()"
        >
          {{ t(action) }}
        </button>
      </div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentModalActionsComponent implements OnInit {
  @Input() paymentAction?: PaymentAction<PaymentDTO>;
  // Default action to create.
  action: PAYMENT_ACTIONS = 'CREATE';

  currencies: CurrencyCode[] = CURRENCIES_CODES.concat();

  createPaymentForm = new FormGroup({
    payerEmail: new FormControl<string | null>(null, [
      Validators.email,
      Validators.required,
    ]),
    currency: new FormControl<CurrencyCode>(null, [Validators.required]),
    amount: new FormControl<number | null>(null, [Validators.required]),
    id: new FormControl(),
  });

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.action = this.paymentAction?.action || 'CREATE'
    if (this.paymentAction?.payment) {
      this.createPaymentForm.patchValue(this.paymentAction.payment);
      this.createPaymentForm.disable();
    }
  }

  performAction() {
    if(this.paymentAction){
      const paymentAction: PaymentAction<PaymentDTO> = {
        ...this.paymentAction,
        payment: {
          ...(this.createPaymentForm.value as PaymentDTO),
          id: this.paymentAction?.payment?.id || '',
        },
      }
      this.activeModal.close(paymentAction);
    }
    else {
      this.activeModal.close();
    }
  }
}
