import { inject, Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

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
