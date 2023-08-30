import { Component, OnInit } from '@angular/core';
import { DescriptionAreaComponent } from './description-area/description-area.component';
import { AdditionalInfoAreaComponent } from './additional-info-area/additional-info-area.component';
import { ReviewAreaComponent } from './review-area/review-area.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  detailsTabSection = DescriptionAreaComponent;

  constructor() {}

  ngOnInit(): void {}

  assignTabSectionComponent(component) {
    if (component === 'description') {
      this.detailsTabSection = DescriptionAreaComponent;
    } else if (component === 'additional-info') {
      this.detailsTabSection = AdditionalInfoAreaComponent;
    } else {
      this.detailsTabSection = ReviewAreaComponent;
    }
  }
}
