import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { CheckoutBreadcrumbAreaComponent } from './checkout-breadcrumb-area/checkout-breadcrumb-area.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    CheckoutBreadcrumbAreaComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
