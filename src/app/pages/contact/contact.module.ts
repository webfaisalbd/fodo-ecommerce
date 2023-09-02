import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactBreadcrumbAreaComponent } from './contact-breadcrumb-area/contact-breadcrumb-area.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';


@NgModule({
  declarations: [
    ContactComponent,
    ContactBreadcrumbAreaComponent,
    ContactInfoComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
