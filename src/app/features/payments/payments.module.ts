import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslocoModule } from '@ngneat/transloco';
import { PaymentModalActionsComponent } from './modal-actions/modal-actions.component';
import { PaymentComponent } from './payment.component';
import { ViewPaymentsTableComponent } from './view-payments-table/view-payments-table.component';

const routes: Routes = [{ path: '', component: PaymentComponent }];
@NgModule({
  declarations: [PaymentComponent, ViewPaymentsTableComponent, PaymentModalActionsComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, RouterModule.forChild(routes), TranslocoModule, NgbDropdownModule],
  exports: [PaymentComponent, RouterModule, ViewPaymentsTableComponent],
})
export class PaymentsModule {}
