import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslocoModule } from '@ngneat/transloco';
import { AddEditComponent } from './add-edit-payment/add-edit.component';
import { PaymentComponent } from './payment.component';
import { ViewPaymentsTableComponent } from './view-payments-table/view-payments-table.component';

const routes: Routes = [{ path: '', component: PaymentComponent }];
@NgModule({
  declarations: [PaymentComponent, ViewPaymentsTableComponent, AddEditComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes), TranslocoModule, NgbDropdownModule],
  exports: [PaymentComponent, RouterModule, ViewPaymentsTableComponent],
})
export class PaymentsModule {}
