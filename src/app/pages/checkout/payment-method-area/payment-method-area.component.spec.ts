import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodAreaComponent } from './payment-method-area.component';

describe('PaymentMethodAreaComponent', () => {
  let component: PaymentMethodAreaComponent;
  let fixture: ComponentFixture<PaymentMethodAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMethodAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentMethodAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
