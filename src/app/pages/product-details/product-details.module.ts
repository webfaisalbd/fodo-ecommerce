import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsBreadcrumbComponent } from './product-details-breadcrumb/product-details-breadcrumb.component';
import { ProductDetailsComponent } from './product-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailsBoxComponent } from './product-details-box/product-details-box.component';
import { CarouselModule } from 'primeng/carousel';
import { DescriptionAreaComponent } from './description-area/description-area.component';
import { AdditionalInfoAreaComponent } from './additional-info-area/additional-info-area.component';
import { ReviewAreaComponent } from './review-area/review-area.component';

@NgModule({
  declarations: [
    ProductDetailsBreadcrumbComponent,
    ProductDetailsComponent,
    ProductDetailsBoxComponent,
    DescriptionAreaComponent,
    AdditionalInfoAreaComponent,
    ReviewAreaComponent,
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    SharedModule,
    CarouselModule,
  ],
})
export class ProductDetailsModule {}
