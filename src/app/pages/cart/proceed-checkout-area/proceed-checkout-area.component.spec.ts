import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedCheckoutAreaComponent } from './proceed-checkout-area.component';

describe('ProceedCheckoutAreaComponent', () => {
  let component: ProceedCheckoutAreaComponent;
  let fixture: ComponentFixture<ProceedCheckoutAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceedCheckoutAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProceedCheckoutAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
