import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/lazy-components/product-card/product-card.component';
import { ProductBarComponent } from './components/lazy-components/product-bar/product-bar.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { HeaderTopComponent } from './components/header/header-top/header-top.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    ProductBarComponent,
    NewsletterComponent,
    HeaderTopComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    ProductBarComponent,
    NewsletterComponent,
  ],
})
export class SharedModule {}
