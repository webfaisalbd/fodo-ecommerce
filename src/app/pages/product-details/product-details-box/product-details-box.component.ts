import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details-box',
  templateUrl: './product-details-box.component.html',
  styleUrls: ['./product-details-box.component.scss'],
})
export class ProductDetailsBoxComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  images: any[] = [
    {
      src: 'assets/images/product/1.png',
      alt: 'Avocado',
    },
    {
      src: 'assets/images/product/2.png',
      alt: 'Lettuce',
    },
    {
      src: 'assets/images/product/1.png',
      alt: 'Avocado',
    },
    {
      src: 'assets/images/product/2.png',
      alt: 'Lettuce',
    },
    {
      src: 'assets/images/product/1.png',
      alt: 'Avocado',
    },
  ];
}
