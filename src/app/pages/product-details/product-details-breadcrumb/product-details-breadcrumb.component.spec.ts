import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsBreadcrumbComponent } from './product-details-breadcrumb.component';

describe('ProductDetailsBreadcrumbComponent', () => {
  let component: ProductDetailsBreadcrumbComponent;
  let fixture: ComponentFixture<ProductDetailsBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsBreadcrumbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
