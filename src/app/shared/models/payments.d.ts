export interface PaymentDTO {
  id: string;
  createdDate: string;
  payerEmail: string;
  status: PaymentStatus;
  currency: CurrencyCode;
  amount: number;
  paidDate: string;
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

export interface PaymentCreationDTO {
  payerEmail: string;
  currency: CurrencyCode;
  amount: number;
}
