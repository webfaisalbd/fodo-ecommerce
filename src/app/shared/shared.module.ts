import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/lazy-components/product-card/product-card.component';
import { ProductBarComponent } from './components/lazy-components/product-bar/product-bar.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { HeaderTopComponent } from './components/header/header-top/header-top.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';


import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    ProductBarComponent,
    NewsletterComponent,
    HeaderTopComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule, 
    RouterModule, 
    SidebarModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    ProductBarComponent,
    NewsletterComponent,
  ],
})
export class SharedModule {}
