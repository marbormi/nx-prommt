import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [{ path: '', component: PaymentComponent }];
@NgModule({
  declarations: [PaymentComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TranslocoModule, NgbAccordionModule],
  exports: [PaymentComponent, RouterModule],
})
export class PaymentsModule {}
