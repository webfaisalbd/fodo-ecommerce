import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBreadcrumbAreaComponent } from './cart-breadcrumb-area.component';

describe('CartBreadcrumbAreaComponent', () => {
  let component: CartBreadcrumbAreaComponent;
  let fixture: ComponentFixture<CartBreadcrumbAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartBreadcrumbAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartBreadcrumbAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
