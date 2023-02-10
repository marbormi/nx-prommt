import { Observable } from "rxjs";

export interface PaymentDTO extends PaymentCreationDTO {
  id: string;
  createdDate: string;
  status: PaymentStatus;
  paidDate: string;
}
export interface PaymentCreationDTO {
  payerEmail: string;
  currency: CurrencyCode;
  amount: number;
}


export type PaymentStatus = 'UNPAID' | 'PAID';

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

export type CurrencyCode = (typeof CURRENCY_CODES)[number];

// Actions
export type PAYMENT_ACTIONS = 'CREATE' | 'DELETE' | 'MARK_AS_PAID';
export interface MutablePayment<T> {
  payment: T;
  action: PAYMENT_ACTIONS
}

export type ActionCallback<T> = (payment: T) => Observable<T | void>
export interface PaymentAction<T> {
  payment?: T,
  action: PAYMENT_ACTIONS,
  actionCallback: ActionCallback<T>
}