import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PaymentDTO } from '../../../shared';
import { ViewPaymentsTableService } from './service/view-payments-table.service';

@Component({
  selector: 'view-payments-table',
  templateUrl: './view-payments-table.component.html',
  styleUrls: ['./view-payments-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewPaymentsTableComponent {
  @Input() payments!: PaymentDTO[];

  columns = ViewPaymentsTableService.COLUMNS;
}
