import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { CheckoutBreadcrumbAreaComponent } from './checkout-breadcrumb-area/checkout-breadcrumb-area.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BillingInfoAreaComponent } from './billing-info-area/billing-info-area.component';
import { CheckoutSummaryAreaComponent } from './checkout-summary-area/checkout-summary-area.component';
import { PaymentMethodAreaComponent } from './payment-method-area/payment-method-area.component';

@NgModule({
  declarations: [CheckoutComponent, CheckoutBreadcrumbAreaComponent, BillingInfoAreaComponent, CheckoutSummaryAreaComponent, PaymentMethodAreaComponent],
  imports: [CommonModule, CheckoutRoutingModule, SharedModule],
})
export class CheckoutModule {}
