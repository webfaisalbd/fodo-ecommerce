import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MiniBannerAreaComponent } from './mini-banner-area/mini-banner-area.component';
import { BigBannerAreaComponent } from './big-banner-area/big-banner-area.component';
import { MakeCallAreaComponent } from './make-call-area/make-call-area.component';
import { ShippingAreaComponent } from './shipping-area/shipping-area.component';
import { NewsletterComponent } from '../components/newsletter/newsletter.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [
    HomeComponent,
    MiniBannerAreaComponent,
    BigBannerAreaComponent,
    MakeCallAreaComponent,
    ShippingAreaComponent,
    NewsletterComponent,
  ],
})
export class HomeModule {}
