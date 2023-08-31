import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from './wishlist.component';
import { WishlistBreadcrumbAreaComponent } from './wishlist-breadcrumb-area/wishlist-breadcrumb-area.component';
import { WishlistTableAreaComponent } from './wishlist-table-area/wishlist-table-area.component';


@NgModule({
  declarations: [
    WishlistComponent,
    WishlistBreadcrumbAreaComponent,
    WishlistTableAreaComponent
  ],
  imports: [
    CommonModule,
    WishlistRoutingModule
  ]
})
export class WishlistModule { }
