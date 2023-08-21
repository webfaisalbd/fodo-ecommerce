import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/lazy-components/product-card/product-card.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ProductCardComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, ProductCardComponent],
})
export class SharedModule {}
