import { Component, OnInit } from '@angular/core';
import productsList from 'src/data/data';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  products = productsList;

  constructor() {}

  ngOnInit(): void {}
}
