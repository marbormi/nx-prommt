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

export type CurrencyCode =
  | 'AED'
  | 'AFN'
  | 'EUR'
  | 'GBP'
  | 'JPY'
  | 'KWD'
  | 'MAD'
  | 'MXN'
  | 'NZD'
  | 'RUB'
  | 'SAR'
  | 'SVC'
  | 'USD'
  | 'UYU'
  | 'VEF'
  | 'ZWD';
