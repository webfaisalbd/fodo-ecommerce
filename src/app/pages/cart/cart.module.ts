import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CouponCodeAreaComponent } from './coupon-code-area/coupon-code-area.component';
import { ProceedCheckoutAreaComponent } from './proceed-checkout-area/proceed-checkout-area.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartTableAreaComponent } from './cart-table-area/cart-table-area.component';
import { CartBreadcrumbAreaComponent } from './cart-breadcrumb-area/cart-breadcrumb-area.component';

@NgModule({
  declarations: [
    CartComponent,
    CouponCodeAreaComponent,
    ProceedCheckoutAreaComponent,
    CartTableAreaComponent,
    CartBreadcrumbAreaComponent,
  ],
  imports: [CommonModule, CartRoutingModule, SharedModule],
})
export class CartModule {}
