import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsModule } from './payments/payments.module';


//TODO: maybe delete this moduele, not needed for now.
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaymentsModule
  ],
  exports: [PaymentsModule]
})
export class FeaturesModule { }
