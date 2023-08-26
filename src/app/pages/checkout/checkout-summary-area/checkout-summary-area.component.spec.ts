import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutSummaryAreaComponent } from './checkout-summary-area.component';

describe('CheckoutSummaryAreaComponent', () => {
  let component: CheckoutSummaryAreaComponent;
  let fixture: ComponentFixture<CheckoutSummaryAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutSummaryAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutSummaryAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
