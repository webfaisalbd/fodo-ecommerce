import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsBreadcrumbComponent } from './product-details-breadcrumb/product-details-breadcrumb.component';
import { ProductDetailsComponent } from './product-details.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProductDetailsBreadcrumbComponent, ProductDetailsComponent],
  imports: [CommonModule, ProductDetailsRoutingModule, SharedModule],
})
export class ProductDetailsModule {}
