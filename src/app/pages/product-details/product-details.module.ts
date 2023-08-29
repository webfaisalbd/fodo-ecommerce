import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsBreadcrumbComponent } from './product-details-breadcrumb/product-details-breadcrumb.component';
import { ProductDetailsComponent } from './product-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailsBoxComponent } from './product-details-box/product-details-box.component';

@NgModule({
  declarations: [ProductDetailsBreadcrumbComponent, ProductDetailsComponent, ProductDetailsBoxComponent],
  imports: [CommonModule, ProductDetailsRoutingModule, SharedModule],
})
export class ProductDetailsModule {}
