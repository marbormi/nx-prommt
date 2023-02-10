import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewPaymentsTableService {
  static COLUMNS = [
    { label: 'ID' },
    {
      label: 'CREATED_DATE',
    },
    {
      label: 'PAYER_EMAIL',
    },
    {
      label: 'STATUS',
    },
    {
      label: 'CURRENCY',
    },
    {
      label: 'AMOUNT',
    },
    {
      label: 'PAID_DATE',
    },
  ];
}
