import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsBoxComponent } from './product-details-box.component';

describe('ProductDetailsBoxComponent', () => {
  let component: ProductDetailsBoxComponent;
  let fixture: ComponentFixture<ProductDetailsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
