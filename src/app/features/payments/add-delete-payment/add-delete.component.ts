import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CurrencyCode, PaymentCreationDTO, PaymentDTO } from '../../../shared';
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
  selector: 'nx-prommt-add-edit',
  template: `
    <ng-container *transloco="let t">
      <div class="modal-header">
        <h4 class="modal-title">
          {{ payment?.id ? t('DELETE') : t('CREATE_PAYMENT') }}
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
            'btn-danger': payment?.id !== null,
            'btn-primary': !payment
          }"
          type="submit"
          [disabled]="createPaymentForm.invalid"
          (click)="payment?.id ? confirmDelete() : create()"
        >
          {{ payment?.id ? t('CONFIRM_DELETE') :  t('CREATE') }}
        </button>
      </div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddDeleteComponent implements OnInit {
  @Input() payment?: Partial<PaymentDTO>;

  currencies: CurrencyCode[] = CURRENCIES_CODES.concat();

  createPaymentForm = new FormGroup({
    payerEmail: new FormControl<string | null>(null, [
      Validators.email,
      Validators.required,
    ]),
    currency: new FormControl<CurrencyCode | null>(null, [Validators.required]),
    amount: new FormControl<number | null>(null, [Validators.required]),
  });

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    if (this.payment) {
      this.createPaymentForm.patchValue(this.payment);
      this.createPaymentForm.disable();
    }
  }

  create() {
    this.activeModal.close(this.createPaymentForm.value as PaymentCreationDTO);
  }

  confirmDelete(){
    this.activeModal.close(this.payment?.id);
  }
}
