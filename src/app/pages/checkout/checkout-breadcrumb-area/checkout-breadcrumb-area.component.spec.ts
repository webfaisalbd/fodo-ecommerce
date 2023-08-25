import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutBreadcrumbAreaComponent } from './checkout-breadcrumb-area.component';

describe('CheckoutBreadcrumbAreaComponent', () => {
  let component: CheckoutBreadcrumbAreaComponent;
  let fixture: ComponentFixture<CheckoutBreadcrumbAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutBreadcrumbAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutBreadcrumbAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
