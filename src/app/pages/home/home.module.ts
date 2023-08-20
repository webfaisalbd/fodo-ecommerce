import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MiniBannerAreaComponent } from './mini-banner-area/mini-banner-area.component';



@NgModule({
  declarations: [
    HomeComponent,
    MiniBannerAreaComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
